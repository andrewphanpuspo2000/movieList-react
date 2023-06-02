export const Header = () => {
  return (
    <div className="flex header">
      <div>
        <h2>Cinema</h2>
      </div>
      <div>
        <ul className="flex">
          <li>
            <a href="#animeCard">MovieList</a>
          </li>
          <li>
            <a href="#days">Days</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
