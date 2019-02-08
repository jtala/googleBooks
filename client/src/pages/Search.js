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
  }
  
 handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        });
    };

  handleFormSubmit = event => {
        event.preventDefault();
        this.CallAPI(this.state.search);
        console.log(this.state.result);
        console.log("Sent to API");
        
    };

  CallAPI = query =>{
    API.getBook(query)
    .then(res => this.setState({result: res.data.items}))
    .catch(err => console.log(err));

  };

  showAPIonPage = () =>{
    return(
      <div>
        {this.state.result.map((item)=>{
          return(
            <SearchResults
            key={item.id}
            book={item}                         
           >
            </SearchResults>
          )
        })}
      </div>
    )
  }

  saveBook = (book) => {
    axios.post("/api/books", {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.canonicalVolumeLink
    });
};

  render(){
    return (
      <div className="entireContainer">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">NYT Google Books Search</h1>
            <p className="lead">Search for any book!</p>
          </div>
        </div>
        <SearchForm handleFormSubmit= {this.handleFormSubmit}
        handleInputChange= {this.handleInputChange}/>
        {this.showAPIonPage()}
       
       
    </div>
    );
  }
 
}

export default Search;
