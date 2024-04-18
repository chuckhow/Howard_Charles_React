import { useState } from "react";
import styles from "./todoHeaderStyle.module.css"
export default function ListEntryForm({ToDolist, setToDolist}){
    const [listItem, setListItem]=useState("");
    function manageList(e){
        e.preventDefault();
        setToDolist([...ToDolist,listItem]);
        setListItem("");
    }
    return(
        <div>
        <form className={styles.todoForm} onSubmit={manageList}>
            <div className={styles.formContainer}>
                <input placeholder="Type a list Item . . ." 
className={styles.textBoxStyle} onChange={(e)=>setListItem(e.target.value)} 
value={listItem} type="Text"/>
                <button className={styles.buttonStyle} type="submit">Add to 
List</button> 
            </div>
        </form>
        </div>
    )
}