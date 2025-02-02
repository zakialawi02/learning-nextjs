"use client";
const LoaderSpinner = ({ size = "medium", color = "text-blue-500" }) => {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-4",
    large: "w-12 h-12 border-8",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
          ${sizeClasses[size]}
          border-t-transparent
          border-solid
          rounded-full
          animate-spin
          ${color}
        `}
      ></div>
    </div>
  );
};

export default LoaderSpinner;
