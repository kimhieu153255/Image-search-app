import { createContext, useState } from "react";
import AxiosInstance from "../Axios/AxiosInstance";
const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setDataFunc = async (pageTemp) => {
    try {
      const res = await AxiosInstance.get(`&query=${search}&page=${pageTemp}`);
      if (res) {
        const temp = res.data.results.map((item) => {
          return {
            id: item.id,
            alt_description: item.alt_description,
            url: item.urls.thumb,
          };
        });
        if (pageTemp === 1) {
          setData(temp);
          setPage(1);
        } else {
          setData((prev) => [...prev, ...temp]);
          setPage(pageTemp + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    data,
    setData,
    search,
    setSearch,
    page,
    setPage,
    setDataFunc,
  };
  return <DataContext.Provider value={value} {...props}></DataContext.Provider>;
};

export { DataContext, DataProvider };
