import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img src="/code.jpeg" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">
        Creating App is Fun! Awesome and also Satisfying! You have to do this! 5
        tips to maximize
      </div>
      <div className="video__details">
        <span>
          <AiFillEye />
          5M Views • <span>5 days ago</span>
        </span>
      </div>
      <div className="video__channel">
        <img src="/pp.jpeg" alt="channel-icon" />
        <p>Fadhil's Channel</p>
      </div>
    </div>
  );
}

export default Video;
