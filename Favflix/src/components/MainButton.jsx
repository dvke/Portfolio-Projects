const MainButton = ({ text, color, px = 10, textColor = "black", bg }) => {
  return (
    <button
      className={`group relative py-[7px] px-${px} overflow-hidden border border-gray-300  bg-${bg} text-lg shadow`}
    >
      <div
        className={`absolute inset-0 w-0 bg-${color}-400 transition-all duration-[250ms] ease-out group-hover:w-full`}
      ></div>
      <span className={`relative text-${textColor} group-hover:text-white`}>
        {text}
      </span>
    </button>
  );
};

export default MainButton;
