import React from "react";


function SearchForm(props){
    return (
        <form className="search">
          <div className="form-group">
            <label htmlFor="breed">Book Name:</label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="breed"
              list="breeds"
              type="text"
              className="form-control"
              placeholder="Type in the name of a book to begin!"
              id="breed"
            />
            <button type="submit" onClick={props.checkAxios} className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      );

}

export default SearchForm;