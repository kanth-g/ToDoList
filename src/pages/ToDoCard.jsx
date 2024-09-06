import { useState } from "react";
import { GoChevronUp } from "react-icons/go";
import  styles  from "./to-docard.module.css";
const ToDoCard = ({time, title, content}) =>{
const [isContent, setContent] = useState(false)
console.log(time, title, content, "time, title, content");

    return(
        <div className={styles.todo_card}>
            <div className={styles.todo_card__header}>
                <span className="header_time">{time}</span>
                <span className="header_title">{title}</span>                
                <GoChevronUp className={`${styles.header_arrow} ${isContent ? styles.header_arrowR: ''}`}  onClick={()=>setContent(!isContent)}/>
            </div>
            {
                isContent ?
                <div className={styles.todo_card__body}>
                  {content}                  
                </div>:''
            }
           
      
       </div>
        
    )
}
export default ToDoCard;