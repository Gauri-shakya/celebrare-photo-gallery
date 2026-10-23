export function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  // Picsum ki original photo 5000px ki hoti hai, isliye hum 600x400 wala optimized URL use kar rahe hain
  // taaki gallery fast load ho aur browser hang na ho.
  const imageUrl = `https://picsum.photos/id/${photo.id}/600/400`;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
      {/* 1. Photo */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={imageUrl}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 2. Card Footer: Author Name & Heart Icon */}
      <div className="p-4 flex items-center justify-between gap-2 mt-auto">
        <div className="truncate">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Author</p>
          <h3 className="text-sm font-semibold text-gray-800 truncate" title={photo.author}>
            {photo.author}
          </h3>
        </div>

        {/* 3. Heart Icon Button */}
        <button
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className={`p-2 rounded-full transition-colors cursor-pointer ${
            isFavourite 
              ? 'bg-red-50 text-red-500 hover:bg-red-100' 
              : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-red-400'
          }`}
        >
          {/* Pure SVG Heart (Bina kisi external UI library ke) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 transition-transform active:scale-75"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
