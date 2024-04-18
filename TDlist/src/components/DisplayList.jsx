import styles from "./displayApp.module.css"

export default function DisplayList({ToDolist, setToDolist}){
    function deleteCompletedTask(item){
        console.log(item,"deleted!");
        setToDolist(ToDolist.filter((item1)=>item1 !==item));
    }
    return(
        <div className={styles.listContainer}>
            
            {ToDolist.map((item)=>(<div className={styles.items}>{item}
        <span>
            <button onClick={()=>deleteCompletedTask(item)}
className={styles.deleteListItem}>Delete</button> 
        </span>
    <hr className={styles.styleStyle}/>
    </div>))}
</div>)
}