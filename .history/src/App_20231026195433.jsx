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
        <div className="inset-0 fixed bg-gray-200">
          <div class="w-16 h-16 relative">
            <div class="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin absolute inset-0">
              <div class="absolute w-1/2 h-1/2 border-t-4 border-blue-500 border-solid border-l-0 border-b-0 border-r-0 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
