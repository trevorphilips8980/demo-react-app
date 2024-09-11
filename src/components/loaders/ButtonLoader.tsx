const Loader = ({
  fullScreen = false,
  className = "",
}: {
  fullScreen?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className && className} ${
        fullScreen ? "h-screen" : ""
      }`}
    >
      <div className="lds-ellipsis">
        <div></div>
        <div></div> <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
