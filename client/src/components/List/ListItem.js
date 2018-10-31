import React from "react";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";

export const ListItem = props => {
  console.log(props);
  return(
  <li className="list-group-item">
    <h3>{props.title}</h3>
    <p>{props.date}</p>
    <a>{props.url}</a>
    <br></br>

    <SaveBtn onClick={() => this.handleSave()} />
    <DeleteBtn onClick={() => this.deleteBook()} />
  </li>
)};
