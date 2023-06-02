export const MovieCard = ({
  id,
  image,
  title,
  desc,
  author,
  price,
  insertHandler,
}) => {
  return (
    <div className=" col-md-3">
      <div className="card mt-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p>
            <i className="fa-solid fa-user"> {author}</i>
          </p>
          <p>price ${price}</p>
          <button
            className="bg-success bg-gradient text-light"
            onClick={() => insertHandler(id, "monday")}
          >
            Monday
          </button>
          <button
            className="bg-success bg-gradient text-light"
            onClick={() => insertHandler(id, "tuesday")}
          >
            Tuesday
          </button>
          <button
            className="bg-success bg-gradient text-light"
            onClick={() => insertHandler(id, "wednesday")}
          >
            Wednesday
          </button>
          <button
            className="bg-success bg-gradient text-light mt-2"
            onClick={() => insertHandler(id, "thursday")}
          >
            Thursday
          </button>
          <button
            className="bg-success bg-gradient text-light mt-2"
            onClick={() => insertHandler(id, "friday")}
          >
            Friday
          </button>
          <button
            className="bg-success bg-gradient text-light mt-2"
            onClick={() => insertHandler(id, "saturday")}
          >
            Saturday
          </button>
          <button
            className="bg-success bg-gradient text-light mt-2"
            onClick={() => insertHandler(id, "sunday")}
          >
            Sunday
          </button>
        </div>
      </div>
    </div>
  );
};
