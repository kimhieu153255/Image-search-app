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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">< </div>
        </div>
      )}
    </div>
  );
}

export default App;
