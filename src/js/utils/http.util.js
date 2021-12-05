import axios from "axios";

const http = (config) => axios.create(config);

export default http;
