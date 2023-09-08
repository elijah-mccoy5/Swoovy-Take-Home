import "./index.css";
import { useState } from "react";
import {
  HomeOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
  PlaySquareFilled,
  Loading3QuartersOutlined,
} from "@ant-design/icons";

interface EventProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}
const Event = ({ title, date, location, description, image }: EventProps) => {
  const [liked, setLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="event-card">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100%",
          flex: 1.1,
        }}
      ></div>
      {isOpen ? (
        <div className="event-info" onClick={() => setIsOpen(!isOpen)}>
          <p className="description-title">Join us! 🎉</p>
          <p className="event-description">{description}</p>
        </div>
      ) : (
        <div className="event-info" onClick={() => setIsOpen(!isOpen)}>
          <div className="info-top">
            <p className="event-date">{date}</p>
            <p className="event-title">{title}</p>
            <span className="event-by">
              <GlobalOutlined className="card-icon" /> By Mobile Loaves and
              Fishes
            </span>
            <span className="event-location">
              <HomeOutlined className="card-icon" /> {location}
            </span>
          </div>
          <div className="info-bottom">
            <div className="bottom-left">
              <div className="interested">
                <div className="people-icons">
                  <Loading3QuartersOutlined className="ppl" />
                  <Loading3QuartersOutlined className="ppl" />
                  <Loading3QuartersOutlined className="ppl" />
                  <Loading3QuartersOutlined className="ppl" />
                  <Loading3QuartersOutlined className="ppl" />
                </div>
                <p>116 interested</p>
                <p>50 going</p>
              </div>
            </div>
            <div className="bottom-right">
              {liked ? (
                <HeartFilled
                  className="liked"
                  onClick={() => setLiked(!liked)}
                />
              ) : (
                <HeartOutlined
                  className="like"
                  onClick={() => setLiked(!liked)}
                />
              )}
              <PlaySquareFilled className="play" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
