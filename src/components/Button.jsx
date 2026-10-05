function Button({ label, onClick, variant = "primary", children, type = "button" }) {
  let style = "";

  if (variant === "danger") {
    style = "bg-red-500 hover:bg-red-600 text-white";
  } else {
    // primary (default)
    style = "bg-blue-500 hover:bg-blue-600 text-white";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition ${style}`}
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
