import { useState } from "react";

const SearchText = ({ books, setBooks }) => {
  const [searchText, setSearchText] = useState();
  const [filteredData] = useState(books);

  return (
    <div className="search-box">
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
        onClick={() => {
          const searchData = filteredData.filter((book) => {
            return book?.title.toLowerCase().trim().includes(searchText.toLowerCase().trim());
          });
          setBooks(searchData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchText;
