import Loadmore from "./Components/Button/Loadmore";
import CardList from "./Components/Card/CardList";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="flex flex-col items-center gap-5 my-5">
      <Search></Search>
      <CardList></CardList>
      <Loadmore></Loadmore>
    </div>
  );
}

export default App;
