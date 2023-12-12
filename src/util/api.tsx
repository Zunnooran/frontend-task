import axios from "axios";

const API = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers: {
      "Content-Type": "application/json",
    },
  });

export const loginApi = async (username: string, password: string) => await API.post('/login', { username, password });
