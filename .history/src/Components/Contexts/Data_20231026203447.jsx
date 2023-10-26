import { createContext, useState } from "react";
import AxiosInstance from "../Axios/AxiosInstance";
const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setDataFunc = async (page) => {
    try {
      const res = await AxiosInstance.get(`&query=${search}&page=${page}`);
      if (res) {
        const temp = res.data.results.map((item) => {
          return {
            id: item.id,
            alt_description: item.alt_description,
            url: item.urls.thumb,
          };
        });
        if (page === 1) {
          setData(temp);
          setPage(1);
        } else {
          setData((prev) => [...prev, ...temp]);
          setPage(page + 1);
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
    isLoading,
  };
  return <DataContext.Provider value={value} {...props}></DataContext.Provider>;
};

export { DataContext, DataProvider };
