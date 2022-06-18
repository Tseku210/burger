import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-f67fe-default-rtdb.firebaseio.com/",
});

export default instance;
