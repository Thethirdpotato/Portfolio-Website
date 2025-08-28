import styles from "./styles.module.scss";
import Image from "next/image";
import { useState } from "react";

const MenuBar = () => {
    const [openModal, setOpenModal] = useState("");
    const[isOpen, setIsOpen] = useState(false);

    const [viewText, setViewText] = useState("Edit");
    const [counter, setCounter] = useState(1);

    const handleModal = (name: string) => {
        openModal === name ? setOpenModal("") : setOpenModal(name);
    }

    const handleEdit = () => {
        switch (true) {
            case counter >= 1 && counter < 5:
                setViewText("That'd be pretty rude");
                break;
            default:
                setViewText("Edit");
                break;
        }

        setCounter(counter + 1);
    }

    return(
        <ul className={styles.MenuBarWrapper}>
            <li>
                <p
                onClick={() => handleModal("File")}
                >
                    File
                </p>
                <div className={`${styles.Modal} ${openModal === "File" ? styles.OpenModal : ""}`}>
                    <button 
                        className={`${styles.Tab} ${isOpen ? styles.OpenModal : ""}`}
                        onClick={() => {}}  
                    >
                        New
                    </button>
                </div>
            </li>
            <li>
                <p
                onClick={() => handleModal("Edit")}
                >
                    Edit
                </p>
                <div className={`${styles.Modal} ${openModal === "Edit" ? styles.OpenModal : ""}`}>
                    <button 
                    onClick={() => {
                        handleEdit();
                    }}
                    className={`${styles.Tab} ${isOpen ? styles.OpenModal : ""}`}>
                        {viewText}
                    </button>
                </div>
            </li>
            <li>
                <p
                onClick={() => handleModal("View")}
                >
                    View
                </p>
                <div className={`${styles.Modal} ${openModal === "View" ? styles.OpenModal : ""}`}>
                    <button 
                        className={`${styles.Tab} ${isOpen ? styles.OpenModal : ""}`}    
                    >
                        <Image
                            src="/Images/rock.gif"
                            alt="Rock"
                            height={150}
                            width={150}
                            unoptimized
                        />
                        What you tryin to see?
                    </button>
                </div>
            </li>
        </ul>
    );
}

export default MenuBar;