import useTaskStore from "../store/TaskStore";

function SearchBar() {

  const searchQuery=useTaskStore((state)=>state.searchQuery);
  const setSearchQuery= useTaskStore((state)=>state.setSearchQuery);

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-800/90">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Find a task</h2>
         
        </div>

        <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
          {searchQuery ? "Filtering results" : "Showing all tasks"}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/70">
        <span className="text-lg"></span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title..."
          className="w-full border-0 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}
export default SearchBar;
