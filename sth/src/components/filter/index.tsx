import "./index.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filters">
        <input type="search" className="filter-search" />
        <div className="filter-clear"></div>
        <p>Show matches from</p>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <input type="radio" />
          <p>All Matches</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
