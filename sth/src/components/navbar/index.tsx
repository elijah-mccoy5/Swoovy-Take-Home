import "./index.css";
import {
  CalendarOutlined,
  TeamOutlined,
  AppstoreOutlined,
  BlockOutlined,
  TrophyOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>DELL</h1>
      </div>
      <div className="navbar-buttons-container">
        <div className="navbar-button">
          <AppstoreOutlined className="icon" />
          <p>Dashboard</p>
        </div>
        <div className="navbar-button">
          <BlockOutlined className="icon" />
          <p>Matches</p>
        </div>
        <div className="navbar-button">
          <CalendarOutlined className="icon" />
          <p>Events</p>
        </div>
        <div className="navbar-button">
          <TeamOutlined className="icon" />
          <p>Teams</p>
        </div>
        <div className="navbar-button">
          <TrophyOutlined className="icon" />
          <p>Rewards</p>
        </div>
        <div className="navbar-button">
          <MessageOutlined className="icon" />
          <p>Messaging</p>
        </div>
        <div className="navbar-button">
          <UserOutlined className="icon" />
          <p>Profile</p>
        </div>
        <div className="navbar-button">
          <SettingOutlined className="icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
