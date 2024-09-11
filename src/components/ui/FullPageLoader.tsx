const FullPageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 mb-4"></div>
        <h2 className="text-lg font-semibold text-gray-700">
          Loading, please wait...
        </h2>
      </div>
    </div>
  );
};

export default FullPageLoader;
