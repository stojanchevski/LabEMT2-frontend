import React, {Component} from "react";
import Books from "./Books/Books";
import BookService from "./repo/book-repo";
import Authors from "./Authors/Authors";
import AuthorService from "./repo/author-repo";


class App extends Component{

  constructor(props) {
    super(props);
    this.state ={
      books : [],
        authors : []
    }
  }

  render(){
    return (
        <div>
          <Books books = {this.state.books }/>
            <Authors authors = {this.state.authors}/>
        </div>
    );
  }

  loadBooks = () => {
      BookService.fetchBooks()
        .then((data) =>{
          this.setState({
            books: data.data
          })
        });
  }

    loadAuthors = () => {
        AuthorService.fetchAuthors()
            .then((data) =>{
                this.setState({
                    authors: data.data
                })
            });
    }

  componentDidMount(){
    this.loadBooks();
    this.loadAuthors();
  }

}

export default App;