"use client";

import { useEffect, useRef, useState} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import TaskbarItems from "@/app/components/TaskbarItems";
console.log("TaskbarItems import:", TaskbarItems);
import StartMenu from "@/app/components/StartMenu";


const Taskbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[currentTime, setcurrentTime] = useState(
        new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
    );
    const taskbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(
                taskbarRef.current &&
                !taskbarRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentTime(
                new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            )
        }, 6000);
        
        return () => clearInterval(interval);
    }, [])

    return (
    <footer className={styles.TaskbarWrapper}>
        <button className={`${styles.StartButton} ${isOpen ? styles.Pressed : ""}`}
  onClick={() => setIsOpen(!isOpen)}>
            <img className={styles.Logo} src={"/Images/BetterLogo.png"}></img>
            START
        </button>
        <StartMenu isOpen={isOpen}/>
        <TaskbarItems />
        <time>
            <button className={styles.VolumeButton}>
                <img className={styles.Volume} src="/Images/VolumeIcon.png">
                </img>
            </button>
            {currentTime}
        </time>
    </footer>
  );
}

export default Taskbar;