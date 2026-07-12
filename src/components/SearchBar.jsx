function SearchBar({searchQuery, setSearchQuery}) {
  return (
     <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-bold mb-5">
        Search Tasks
      </h2>

      <input type="text" value={searchQuery}
        onChange={(e)=>
          setSearchQuery(e.target.value)
        }
        placeholder="Search by title "
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}
export default SearchBar;