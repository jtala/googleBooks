import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-4">
      <h1>Google Books</h1>

      <Link to="/" className="badge badge-primary">Saved Books</Link>
      {" "}
      <Link to="/search" className="badge badge-primary">Search For Books</Link>
    </header>
  );
};

export default Header;