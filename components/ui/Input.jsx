export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00c881] focus:border-transparent ${className}`}
      {...props}
    />
  );
}
