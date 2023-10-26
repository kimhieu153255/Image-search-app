import { useContext } from "react";
import { DataContext } from "../Contexts/Data";
import PropTypes from "prop-types";

const Search = ({ setIsLoading }) => {
  const { setDataFunc, setSearch, search } = useContext(DataContext);
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Search"
        className="inline-block px-3 py-2 border border-green-500 rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-2 bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600 rounded-md"
        onClick={() => {
          console.log(search);
          setIsLoading(true);
          setDataFunc(1);
        }}
      >
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  setIsLoading: PropTypes.func,
};

export default Search;
