export default function Button({ children, className = "", variant = "primary", ...props }) {
  const baseStyle = "px-6 py-3 rounded-md font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-hover",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
