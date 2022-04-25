import React from "react";

const authors = (props) =>{
    return(
        <div>
            <div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name of Author</th>
                            <th scope={"col"}>Surname of Author</th>
                            <th scope={"col"}>Author Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.country}</td>
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

export default authors;