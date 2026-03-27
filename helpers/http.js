import axios from "axios";
export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}api/`,
  headers: {
    Authorization: `Bearer asdasdasd.asdasd`,
    accept: "application/json"
  },
  mode: 'cors'
});
