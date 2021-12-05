import http from "../utils/http.util";

export const search = async (searchTerm) => {
  try {
    const res = await http({
      baseURL: import.meta.env.VITE_BASE_URL,
      params: {
        apiKey: import.meta.env.VITE_API_KEY,
      },
    }).get("/search/" + searchTerm);

    return res.data;
  } catch (err) {
    throw err;
  }
};
