import { useState } from "react";
import Loadmore from "./Components/Button/Loadmore";
import CardList from "./Components/Card/CardList";
import Search from "./Components/Search/Search";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full relative m-0">
      <div className="flex flex-col items-center gap-5 my-5">
        <Search></Search>
        <CardList></CardList>
        <Loadmore></Loadmore>
      </div>
      <div className="inset-1 fixed  brightness-75 bg-gray-200">
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
