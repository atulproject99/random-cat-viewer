import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
  headers: { accept: "application/json" },
});

export default class ApiService {
  static async get(endpoint, params = null) {
    // {error,value}
    try {
      const response = await api.get(endpoint, { params });
      return { error: null, value: response.data };
    } catch (err) {
      return { error: err.message, value: null };
    }
  }

  // post, patch ,delete
}
