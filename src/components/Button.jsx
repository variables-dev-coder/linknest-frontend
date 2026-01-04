function Button({ children, variant = "default", ...props }) {
  const base =
    "font-medium rounded-lg transition-all duration-200 cursor-pointer";

  const styles = {
    default:
      "px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100",
    primary:
      "px-8 py-4 bg-indigo-600 text-white text-lg hover:bg-indigo-700",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
