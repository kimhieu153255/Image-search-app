import { useContext } from "react";
import { DataContext } from "../Contexts/Data";
import PropTypes from "prop-types";

const Loadmore = ({ setIsLoading }) => {
  const { data, page, setDataFunc } = useContext(DataContext);

  return (
    data.length > 0 && (
      <button
        className="px-3 py-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold"
        onClick={() => {
          setDataFunc(page + 1);
        }}
      >
        Loadmore
      </button>
    )
  );
};

Loadmore.propTypes = {
  setIsLoading: PropTypes.func,
};

export default Loadmore;
