// LocalStorage key jahan favourites store honge
export const STORAGE_KEY = 'celebrare_favourite_photos';

// Reducer function jo decide karega ki state kaise change hogi
export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const photoId = action.payload;
      
      // Agar photoId pehle se list me hai, toh usko hata do (unfavourite)
      if (state.includes(photoId)) {
        return state.filter((id) => id !== photoId);
      } 
      // Agar list me nahi hai, toh add kar do (favourite)
      else {
        return [...state, photoId];
      }
    }
    default:
      return state;
  }
}

// Initial state load karne ke liye helper function (LocalStorage se read karta hai)
export function getInitialFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error('Failed to load favourites from localStorage:', err);
    return [];
  }
}
