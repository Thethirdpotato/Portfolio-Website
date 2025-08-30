"use client";

import { useEffect, useRef, useState} from "react";
import styles from "./styles.module.scss";
import TaskbarItems from "@/app/components/TaskbarItems";
import Image from "next/image";
import StartMenu from "@/app/components/StartMenu";
import VolumeMenu from "@/app/components/VolumeMenu";

const Taskbar = () => {
    const [startIsOpen, setStartIsOpen] = useState(false);
    const [volumeIsOpen, setVolumeIsOpen] = useState(false);
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
                setStartIsOpen(false);
                setVolumeIsOpen(false);
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
    <footer className={styles.TaskbarWrapper} ref={taskbarRef}>
        <button className={`
        ${styles.StartButton} 
        ${startIsOpen ? styles.startPressed : ""}
        `}
        onClick={() => setStartIsOpen(!startIsOpen)}>
            <Image className={styles.Logo} src={"/Images/BetterLogo.png"}
            alt="Start"
            width={32}
            height={32}
            />
            START
        </button>
        <StartMenu isOpen={startIsOpen}/>
        <VolumeMenu isOpen={volumeIsOpen}/>
        <TaskbarItems />
        <time>
            <button className={`
                ${styles.VolumeButton} 
                ${volumeIsOpen ? styles.volumePressed : ""}
            `}
            onClick={() => setVolumeIsOpen(!volumeIsOpen)}>
                <Image 
                className={styles.Volume} 
                src="/Images/VolumeIcon.png"
                alt="Volume"
                width={32}
                height={10}
                />
            </button>
            {currentTime}
        </time>
    </footer>
  );
}

export default Taskbar;