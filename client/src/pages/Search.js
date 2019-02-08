import React from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";


class Search extends React.Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    console.log("Component did mount");
  }



  checkAxios(event){
    event.preventDefault();
    API.getBook().then((res)=>{
      var dataToMap =res.data.items;
      console.log(dataToMap);

    })
  }

  showBooks = () => {
    var mapped = dataToMap.map((data)=>{
      return data.volumeInfo.title;
    })
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
        <SearchForm checkAxios= {this.checkAxios}/>
        <SearchResults></SearchResults>
       




    </div>
    );
  }
 
}

export default Search;
