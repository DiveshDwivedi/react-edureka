import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const searchBook = () => {
    
  };

  return (
    <>
      <input
        className="form-control mr-sm-2"
        type="search"
        laceholder="Search"
        aria-label="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={searchBook}
      >
        Search
      </button>
    </>
  );
};

export default Search;
