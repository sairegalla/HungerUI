import "../index.css";

const Shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(10)
        .fill("")
        .map((ele, index) => (
          <div key={index} className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;
