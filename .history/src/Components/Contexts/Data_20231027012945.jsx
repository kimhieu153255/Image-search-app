import { createContext, useRef, useState } from "react";
import AxiosInstance from "../Axios/AxiosInstance";
const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const setDataFuncRef = useRef();

  const setDataFunc = async (pageTemp) => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        const res = await AxiosInstance.get(
          `&query=${search}&page=${pageTemp}`
        );
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
            setPage((prev) => prev + 1);
          }
          setIsLoading(false);
        }
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  setDataFuncRef.current = setDataFunc;

  const value = {
    data,
    setData,
    search,
    setSearch,
    page,
    setPage,
    setDataFuncRef,
    isLoading,
    setIsLoading,
  };
  return <DataContext.Provider value={value} {...props}></DataContext.Provider>;
};

export { DataContext, DataProvider };
