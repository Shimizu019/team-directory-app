function ErrorMessage({ message }) {
  return (
    <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-center font-medium text-red-600 dark:border-red-900 dark:bg-red-950/50 dark:text-red-300">
      <span aria-hidden="true">⚠</span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
