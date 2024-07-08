import axios from "axios";
import { APIURL } from ".";

const client = axios.create({
  baseURL: APIURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": `${APIURL}`,
  },
  withCredentials: true,
});

export default client;
