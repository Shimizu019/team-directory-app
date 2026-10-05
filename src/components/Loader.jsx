function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600 dark:border-slate-700 dark:border-t-indigo-400" />
      <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
        Loading...
      </p>
    </div>
  );
}

export default Loader;
