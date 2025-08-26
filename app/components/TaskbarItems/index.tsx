import { useAppContext } from "@/app/utils/context";
import styles from "./styles.module.scss";

const TaskbarItems = () => {
    const {openList, minimisedList, setMinimisedList, active, setActive, openPopups} = useAppContext();


    const combinedItemsMap = new Map<string, string>();
    openList.forEach((id) => combinedItemsMap.set(id, id));
    openPopups.forEach((p) => combinedItemsMap.set(p.id, p.id));
    const combinedItems = Array.from(combinedItemsMap.entries()).map(([id, label]) => ({ id, label }));

    const handleMinimise = (id: string) => {
  setMinimisedList(prev => 
    prev.includes(id) 
      ? prev.filter(item => item !== id) // restore
      : [...prev, id]                     // minimize
  );

  // Set active only if restoring, or clear if minimizing
  setActive(prev => (prev === id && minimisedList.includes(id) ? id : prev === id ? "" : prev));
};

    return(
        <div className={styles.TaskbarItemsWrapper}>
            {combinedItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.TaskbarItem} ${
            !minimisedList.includes(item.id) ? styles.Pressed : ""
          }`}
          onClick={() => handleMinimise(item.id)}
        >
          {item.label}
        </button>
      ))}
        </div>
    );
}

export default TaskbarItems;