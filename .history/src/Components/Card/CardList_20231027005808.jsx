import { useContext } from "react";
import { DataContext } from "../Contexts/Data";
import Card from "./Card";

const CardList = () => {
  const data = useContext(DataContext);
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {data.data.map((item, ind) => (
        <Card key={ind} title={item.alt_description} src={item.url}></Card>
      ))}
    </div>
  );
};

export default CardList;
