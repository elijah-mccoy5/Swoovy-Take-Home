import "./index.css";
import { Checkbox, Slider } from "antd";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filters">
        <input type="search" className="filter-search" placeholder="🔍" />
        <div className="filter-clear">
          <p className="filters-title">Filters</p>
          <p className="clear">Clear All</p>
        </div>
        <p className="match-title">Show matches from</p>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>All Matches</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Registered Matches</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Favorited Matches</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Matches with Co-workers</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Completed assignments</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Company matches</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Giving projects</p>
        </div>
        <Slider />
        <p className="match-title">Schedule</p>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Today</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Tomorrow</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Next Week</p>
        </div>
        <p className="match-title">Organization</p>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>American Cancer Society</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Amnesty International USA</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>American Heart Association</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Cape Crusader Basketball Club</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Caring Center</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Citizens' Climate Education</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Child Evangelical Fellowship Inc.</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Crown Jewel Club</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Dreams Come True Inc.</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Dreyfuss Initiative</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Extended Hope Youth Program</p>
        </div>
        <div className="radios">
          <Checkbox className="checkbox" />
          <p>Eyes Of Tomorrow</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
