import axios from "axios";
import { getLocalState } from "../utils/helpers";

const instance = axios.create({
  timeout: 10000,
  params: {},
});

/* Store requests */
const sourceRequest: Record<string, any> = {};


export const apiService = {
  request(config = {}) {
    return instance.request(config);
  },
  getData(url: string, config = {}) {
    return instance.get(url, config);
  },
  postData(url: string, data?: any, config?: Record<string, any>) {
    return instance.post(url, data, config);
  },
  putData(url: string, data?: any, config?: Record<string, any>) {
    return instance.put(url, data, config);
  },
  patchData(url: string, data?: any) {
    return instance.patch(url, data);
  },
  deleteData(url: string, config = {}) {
    return instance.delete(url, config);
  },
};
