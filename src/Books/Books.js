import React from "react";

const book = (props) =>{
    return(
        <div>
            <div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name of Book</th>
                            <th scope={"col"}>Book Category</th>
                            <th scope={"col"}>Book Author</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.author}</td>
                                </tr>
                            )
                        })};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default book;