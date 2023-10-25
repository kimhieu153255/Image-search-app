import { useContext, useState } from "react";
import { DataContext } from "../Contexts/Data";

const Search = () => {
  const { setDataFunc, setSearch } = useContext(DataContext);
  const [searchTemp, setSearchTemp] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="inline-block px-3 py-2 border-2 border-green-500"
        onChange={(e) => {
          setSearchTemp(e.target.value);
        }}
      />
      <button
        type="submit"
        className="px-3 py-2 bg-green-500"
        onClick={() => {
          setSearch(searchTemp);
          setDataFunc(1);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
