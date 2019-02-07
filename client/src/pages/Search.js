import React from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";


class Search extends React.Component {

  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  componentDidMount() {
   console.log("component mounted!");
  }

  checkAxios(event){
    event.preventDefault();
    console.log("Hit");
  }

  render(){
    return (
      <div className="entireContainer">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">NYT Google Books Search</h1>
            <p className="lead">Search for any book!</p>
          </div>
        </div>
        <SearchForm></SearchForm>
        <SearchResults></SearchResults>
       




    </div>
    );
  }
 
}

export default Search;