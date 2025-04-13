function Search({ searchTerm, onSearch }) {
    return (

      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => 
            onSearch(e.target.value)}
        />
      </div>

    );
  }
  
  export default Search;
  