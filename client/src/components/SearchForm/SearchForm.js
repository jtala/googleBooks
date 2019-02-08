import React from "react";


function SearchForm(props){
    return (
        <form className="search">
          <div className="form-group">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text" 
              className="form-control" placeholder="Search by Title of the Book"
              id="search"
            />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      );

}

export default SearchForm;