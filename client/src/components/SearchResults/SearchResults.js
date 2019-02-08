import React from "react";

function SearchResult (props) {
    
    return (
     <div>
      <h4>Title: {props.book.volumeInfo.title}</h4>
      <h4>Authors: {props.book.volumeInfo.authors}</h4>
      <h4>Description: {props.book.volumeInfo.description}</h4>
      <img src= {props.book.volumeInfo.imageLinks.thumbnail}></img>
      <h4><a href={props.book.selfLink}>Link</a> </h4>
      <button className="btn btn-secondary" id={props.book._id} >Save</button>

      <br></br>
    </div>
    
    );
}

export default SearchResult;