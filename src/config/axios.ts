import axios from "axios";
import { APIURL } from ".";

const client = axios.create({
  baseURL: APIURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    withCredentials: true,
    "Access-Control-Allow-Origin": `${APIURL}`,
  },
});

export default client;
