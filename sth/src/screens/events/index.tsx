import Event from "../../components/event";
import "./index.css";
import {
  AlignLeftOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  UnorderedListOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Filter from "../../components/filter";
import events from "../../dummy.json";

const Events = () => {
  return (
    <div className="events">
      <div className="header">
        <div className="header-left">
          <AlignLeftOutlined className="header-icon" />
          <span className="header-teal">
            <UnorderedListOutlined className="color-icon" />
            Report Volunteer Service Hours
          </span>
          <span className="header-blue">
            <MailOutlined className="color-icon" />
            Message My HR Representative
          </span>
        </div>
        <div className="header-right">
          <div className="right-icons">
            <MessageOutlined className="header-icon" />
            <BellOutlined className="header-icon" />
            <UserOutlined className="header-icon" />
            <span>Elijah McCoy</span>
          </div>
        </div>
      </div>
      <div className="events-main">
        <div className="main-left">
          <Filter />
        </div>
        <div className="main-right">
          {events.map((event, index) => (
            <Event
              title={event.title}
              key={index}
              date={event.date}
              location={event.location}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
