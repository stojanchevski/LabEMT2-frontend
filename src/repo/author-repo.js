import axios from "../custom-axios/custom-axios";

const AuthorService={
    fetchAuthors:() => {
        return axios.get("/authors");
    }
}



export default AuthorService;