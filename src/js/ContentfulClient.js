import * as contentful from "contentful";

const client = contentful.createClient({
  space: import.meta.env.VITE_API_SPACE_ID,
  accessToken: import.meta.env.VITE_API_ACCESS_TOKEN,
});

export default client;
