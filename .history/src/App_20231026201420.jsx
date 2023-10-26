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
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite] border-blue-500">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
