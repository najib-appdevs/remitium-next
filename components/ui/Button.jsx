export default function Button({ children, className = "", variant = "primary", ...props }) {
  const baseStyle = "px-6 py-3 rounded-md font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-[#00c881] text-white hover:bg-[#00a66b]",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "border-2 border-[#00c881] text-[#00c881] hover:bg-[#00c881] hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
