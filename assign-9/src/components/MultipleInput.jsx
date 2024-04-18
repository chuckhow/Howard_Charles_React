import styles from "./multipleInput.module.css"
import { useState } from "react"
export default function MultipleInput(){

    const [BookData,setBookData]=useState({title: "", author: "", publisher: "",
publicationDate: "", pages: ""})
    function formSubmit(e){
        e.preventDefault()
        console.log(BookData);
    }

    return (
    
        <div>
            <div className={styles.header}>
                <h3>Heading</h3>

            </div>
        <form className={styles.todoForm}>
            <div>   
            <input className={styles.textBoxStyle} placeholder="Title" type="text" 
    onChange={(e)=>setBookData({...BookData, title: e.target.value})} value={BookData.title}/>
    <input className={styles.textBoxStyle} placeholder="Author" type="text" 
    onChange={(e)=>setBookData({...BookData, author: e.target.value})} value={BookData.author}/>
    <input className={styles.textBoxStyle} placeholder="Publisher" type="text" 
    onChange={(e)=>setBookData({...BookData, publisher: e.target.value})} value={BookData.publisher}/>
    <input className={styles.textBoxStyle} placeholder="Publication Date" type="text" 
    onChange={(e)=>setBookData({...BookData, publicationDate: e.target.value})} value={BookData.publicationDate}/>
    <input className={styles.textBoxStyle} placeholder="Number of Pages" type="text" 
    onChange={(e)=>setBookData({...BookData, pages: e.target.value})} value={BookData.pages}/>
        </div>
        <div className={styles.formContainer}>
        <button className={styles.buttonStyle}
    onClick={(e)=>formSubmit(e)}>Add</button>
        </div>
    </form>

    </div>
    // <h1>why???</h1>
    );
}