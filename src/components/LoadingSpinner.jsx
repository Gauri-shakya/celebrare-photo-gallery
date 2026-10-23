export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      {/* Tailwind animate-spin utility class jo gol chakkar ghumati hai */}
      <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 font-medium text-sm">Loading photos...</p>
    </div>
  );
}
