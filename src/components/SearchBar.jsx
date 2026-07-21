function SearchBar({searchQuery, setSearchQuery}) {
  return (
     <div className="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700/80 rounded-xl shadow-md p-6 mb-8 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-5 text-slate-900 dark:text-slate-100">
        Search Tasks
      </h2>

      <input type="text" value={searchQuery}
        onChange={(e)=>
          setSearchQuery(e.target.value)
        }
        placeholder="Search by title..."
        className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      />

    </div>
  );
}
export default SearchBar;