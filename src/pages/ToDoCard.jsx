import { useState } from "react";
import { GoChevronUp } from "react-icons/go";
import  styles  from "./to-docard.module.css";
const ToDoCard = (props) =>{
const {time, title, content} = props.cards;
const [isContent, setContent] = useState(false)

    return(
        <div className={styles.todo_card}>
            <div className={styles.todo_card__header} onClick={()=>setContent(!isContent)}>
                <span className="header_time">{time}</span>
                <span className="header_title">{title}</span>                
                <GoChevronUp className={`${styles.header_arrow} ${isContent ? styles.header_arrowR: ''}`} />
            </div>
            {
                isContent ?
                <li className={styles.todo_card__body}>
                  {content}                  
                </li>:''
            }
           
      
       </div>
        
    )
}
export default ToDoCard;