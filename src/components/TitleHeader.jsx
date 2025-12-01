const TitleHeader = ({ title, above, sub }) => {
  return (
    <div className="text-white flex flex-col items-center gap-2">
      <div className="flavor-text">
        <p>{above}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
      <div className="explanation-text animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
