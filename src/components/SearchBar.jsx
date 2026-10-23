export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="max-w-md mx-auto mb-8 relative">
      <div className="relative">
        {/* Search Icon (SVG) */}
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search by author name..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
        />

        {/* Clear Button (Agar kuch type kiya ho toh 'X' button dikhega) */}
        {searchTerm && (
          <button
            onClick={() => onSearchChange({ target: { value: '' } })}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 text-sm cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
