import React from "react";
import ReactPlayer from "react-player";
import DiscussionBoard from "./DiscussionBoard.js";

function VideoPage(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState((width / 16) * 9);
  const [videoInfo, setVideoInfo] = React.useState([]);
  const updateWidthAndHeight = () => {
    if (window.innerWidth > (window.innerHeight / 9) * 16) {
      setWidth((window.innerHeight / 9) * 16);
      setHeight(window.innerHeight);
    } else {
      setWidth(window.innerWidth);
      setHeight((window.innerWidth / 16) * 9);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  let url =
    "http://localhost:8000/api/videos/" + window.location.href.split("/")[5];
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setVideoInfo(JSON.parse(JSON.stringify(json)).data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);
  return (
    <div>
      {videoInfo.map((number) => (
        <div>
          <h1 className="videoPad">{number.Title}</h1>
          <ReactPlayer
            className="video"
            controls="true"
            width={width * 0.6}
            height={height * 0.6}
            url={"https://www.youtube.com/watch?v=" + number.VideoLink}
          ></ReactPlayer>
        </div>
      ))}
      <DiscussionBoard></DiscussionBoard>
    </div>
  );
}

export default VideoPage;
