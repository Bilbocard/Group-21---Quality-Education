import axios from "axios";
const KEY = "AIzaSyD8eSKso7LGZ_ilztIlPj0fh3T7AbqrVF0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet,contentDetails,statistics,status",
    maxResults: 5,
    key: KEY,
  },
});
