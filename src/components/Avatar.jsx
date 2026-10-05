function Avatar({ name, size = "md" }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizeClass =
    size === "lg"
      ? "h-20 w-20 text-2xl"
      : size === "sm"
        ? "h-9 w-9 text-xs"
        : "h-12 w-12 text-base";

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-extrabold text-white shadow-md ${sizeClass}`}
    >
      {initials}
    </div>
  );
}

export default Avatar;
