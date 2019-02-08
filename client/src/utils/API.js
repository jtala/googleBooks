import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API


const base = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "&key=AIzaSyANcYqT35Pig7SeI5qF9anJxu31MHUGUFk";

export default {
  getBook: function(query) {
    return axios.get(base + query + KEY);
  }
};
