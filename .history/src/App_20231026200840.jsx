import { useState } from "react";
import Loadmore from "./Components/Button/Loadmore";
import CardList from "./Components/Card/CardList";
import Search from "./Components/Search/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full relative">
      <div className="flex flex-col items-center gap-5 my-5">
        <Search></Search>
        <CardList></CardList>
        <Loadmore></Loadmore>
      </div>
      {isLoading && (
        <div className="inset-0 fixed top-0 left-0 bg-gray-200">
          <div className="animate-spin h-5 w-5 mr-3 border border-blue-50"></div>
        </div>
      )}
    </div>
  );
}

export default App;