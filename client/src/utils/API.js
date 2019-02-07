import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

var KEY = "AIzaSyANcYqT35Pig7SeI5qF9anJxu31MHUGUFk";

export default {
  getBook: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + KEY);
  }
};
