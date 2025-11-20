import axios from "axios";

const commonApi = axios.create({
  baseURL: "http://localhost:3000"
});
console.log(commonApi);


export default commonApi;
