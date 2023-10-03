import axios from "axios";

export default axios.create({
  baseURL: "https://bc115be.spcluster.tk/",
  headers: {
    "content-Type": "application/json",
  },
});
