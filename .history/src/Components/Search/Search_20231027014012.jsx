import { useContext } from "react";
import { DataContext } from "../Contexts/Data";
import { debounce } from "lodash";

const Search = () => {
  const { setDataFuncRef, setSearch, search } = useContext(DataContext);
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Search"
        className="inline-block px-3 py-2 border border-green-500 rounded-md"
        onChange={(e) => {
          console.log(e.target.value, search);
          setSearch(e.target.value);
        }}
      />
      <button
        type="submit"
        className="px-3 py-2 bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600 rounded-md"
        onClick={debounce(() => {
          setDataFuncRef.current(1);
        }, 1000)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
