import axios from "axios";
// const former = "https://www.googleapis.com/books/v1/volumes";
const instance = axios.create({
  baseURL:
    "http://localhost:8080/biblioextractor-dashboard-rest/resources/scrape",
});

export default instance;
