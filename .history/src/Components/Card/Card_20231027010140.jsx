import PropTypes from "prop-types";

const Card = ({ title, src }) => {
  return (
    <div className="w-60 relative flex flex-col justify-stretch border rounded-md bg-gray-200 shadow-lg hover:border-green-500 cursor-pointer hover:scale-105 transition-all">
      <div className="w-60 h-60 rounded-md px-2 pt-2">
        <img
          src={src}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="px-5 py-2">
        <span className="line-clamp-2 overflow-y-hidden font-semibold">
          {title}
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Card;
