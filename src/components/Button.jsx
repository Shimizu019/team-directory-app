function Button({ label, onClick, variant = "primary", children, type = "button" }) {
  let style = "";

  if (variant === "danger") {
    style =
      "bg-rose-500 text-white shadow-sm hover:bg-rose-600 hover:shadow-md";
  } else if (variant === "secondary") {
    style =
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700";
  } else {
    // primary (default)
    style =
      "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md hover:shadow-lg hover:brightness-110";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-5 py-2.5 font-semibold transition duration-200 active:scale-95 ${style}`}
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
