import { useState, useReducer, useEffect, useMemo, useCallback } from 'react';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import { favouritesReducer, getInitialFavourites, STORAGE_KEY } from './hooks/favouritesReducer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { PhotoCard } from './components/PhotoCard';
import { SearchBar } from './components/SearchBar';

function App() {
  // 1. Data Fetching via Custom Hook (Requirement 2 & 6)
  const { photos, loading, error } = useFetchPhotos();

  // 2. Search Term State
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Favourites State via useReducer (Requirement 5)
  // getInitialFavourites() localStorage se saved IDs uthayega
  const [favourites, dispatch] = useReducer(favouritesReducer, [], getInitialFavourites);

  // 4. Jab bhi favourites change ho, use localStorage me save karo (Requirement 5)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch (err) {
      console.error('Failed to save favourites to localStorage:', err);
    }
  }, [favourites]);

  // 5. useCallback: Search Handler function ko memoize kiya (Requirement 7)
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // 6. useCallback: Toggle Favourite dispatch handler
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photoId });
  }, []);

  // 7. useMemo: Filtered photos calculate karna (Requirement 4 & 7)
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    const cleanSearch = searchTerm.toLowerCase().trim();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(cleanSearch)
    );
  }, [photos, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <header className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Photo Gallery
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Search photos by author and save your favourites
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Search Input Bar */}
        {!loading && !error && (
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        )}

        {/* 1. Loading State */}
        {loading && <LoadingSpinner />}

        {/* 2. Error State */}
        {error && <ErrorMessage message={error} />}

        {/* 3. Empty Search Result State */}
        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-md mx-auto">
            <p className="text-3xl mb-2">🔍</p>
            <h3 className="text-base font-semibold text-gray-800">No photos found</h3>
            <p className="text-sm text-gray-500 mt-1">
              No photos match author "{searchTerm}"
            </p>
          </div>
        )}

        {/* 4. Responsive Grid (Desktop: 4, Tablet: 2, Mobile: 1) */}
        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavourite={favourites.includes(photo.id)}
                onToggleFavourite={handleToggleFavourite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
