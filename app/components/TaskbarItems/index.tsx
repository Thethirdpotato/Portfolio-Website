import { useAppContext } from "@/app/utils/context";
import styles from "./styles.module.scss";
import { useEffect, useState} from "react";

const TaskbarItems = () => {
    const {openList, minimisedList, setMinimisedList, active, setActive} = useAppContext();

    const handleMinimise = (title: string) => {
        if (active == title){
            if(active === title) {
                if(minimisedList.includes(title)){
                    setMinimisedList(minimisedList.filter(item => item !== title));
                    setActive(title);
                } else {
                    setMinimisedList([...minimisedList, title]);
                    setActive("");
                }
            }else {
                setMinimisedList(minimisedList.filter(item => item !== title));
                setActive(title);
            }
        }
    }

    return(
        <div className={styles.TaskbarWrapper}>
            {openList.map((item,index) => (
                <button 
                className={`${styles.TaskbarItem} ${active === item ? styles.Pressed : ""}`}
                key={index}
                onClick={() => (handleMinimise(item))}>
                    {item}
                </button>
            ))}
        </div>
    );
}

export default TaskbarItems;