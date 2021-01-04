import axios from "axios";
const KEY = "AIzaSyDct3YlAGA79uI6mXxEc1nDYCBGF3G8N5s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
