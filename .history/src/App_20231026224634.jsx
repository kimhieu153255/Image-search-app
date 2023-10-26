import { useContext, useEffect } from "react";
import Loadmore from "./Components/Button/Loadmore";
import CardList from "./Components/Card/CardList";
import Search from "./Components/Search/Search";
import { DataContext } from "./Components/Contexts/Data";

function App() {
  const isLoading = useContext(DataContext).isLoading;

  useEffect(() => {
    document.title = "Github User Search";
  }, []);

  return (
    <div className="w-full relative">
      <div className="flex flex-col items-center gap-5 my-5">
        <Search></Search>
        <CardList></CardList>
        {isLoading && (
          <div className="inset-0 backdrop-blur-sm">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite] border-blue-500 absolute top-1/2 left-1/2 backdrop-blur-[2px]">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          </div>
        )}
        {!isLoading && <Loadmore></Loadmore>}
      </div>
    </div>
  );
}

export default App;
