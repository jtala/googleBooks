import React from "react";
import Header from "../components/Header/Header";
import SearchResults from "../components/SearchResults/SearchResults";
import axios from "axios";

class Saved extends React.Component {
    state = {
        result: []
    }
    componentDidMount() {
        this.getBook();
    };
    
    getBook = () => {
        axios.get("/api/books/").then((response) => {
            this.setState({
                result: response.data
            });
        });
    };

      
    render() {
        return (
            <div className="content">
                <Header />
                {this.state.result.map((item) => {
                    return (
                        <SearchResults
                        key={item._id}
                        book={item}
                    />
                    );
                })}
            </div>
            
        );
    };
}


export default Saved;