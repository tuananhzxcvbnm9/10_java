import axios from "axios";
import { API_BASE_URL } from "../lib/constants";
export const client = axios.create({ baseURL: API_BASE_URL, timeout: 10000 });
