import { useState } from "react";
import ListEntryForm from "./components/ListEntryForm"
import DisplayList from "./components/DisplayList"
export default function TodoListApp(){
  const [ToDolist,setToDolist]=useState([]);
  return <div>
      <ListEntryForm ToDolist={ToDolist} setToDolist={setToDolist}/>
      <DisplayList ToDolist={ToDolist} setToDolist={setToDolist}/>
  </div>
}
