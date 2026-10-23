export function ErrorMessage({ message }) {
  return (
    <div className="max-w-md mx-auto my-12 p-4 bg-red-50 border border-red-200 rounded-xl text-center">
      <div className="w-10 h-10 mx-auto mb-2 text-red-500 flex items-center justify-center">
        ⚠️
      </div>
      <h3 className="text-red-800 font-semibold text-lg">Failed to Load Photos</h3>
      <p className="text-red-600 text-sm mt-1">{message}</p>
    </div>
  );
}
