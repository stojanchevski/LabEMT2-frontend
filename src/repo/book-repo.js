import axios from "../custom-axios/custom-axios";

const BookService={
    fetchBooks:() => {
        return axios.get("/books");
    }
}



export default BookService;