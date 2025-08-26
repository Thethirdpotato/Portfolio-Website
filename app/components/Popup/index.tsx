"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ReactNode, useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import { useAppContext } from "@/app/utils/context";

interface Props {
    children: ReactNode;
    id: string;
    index: number;
    open: boolean;
    closeWindow: () => void;
}

const Popup = ({ 
    children,
    id,
    index,
    open,
    closeWindow 
    }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimised, setIsMinimised] = useState(false);
    const { minimisedList, setMinimisedList, 
        active, setActive, 
        setOpenList, openList,
        openPopups, setOpenPopups 
    } =
        useAppContext();
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        minimisedList.includes(id)
        ? setIsMinimised(true)
        : setIsMinimised(false);
    }, [minimisedList, id]);

    const handleClose = () => {
        setOpenList(openList.filter(item => item !== id));
        setOpenPopups(openPopups.filter(p => p.id !== id));
        setMinimisedList(minimisedList.filter(item => item !== id));
        closeWindow();
    }

    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef} bounds="parent">
            <div 
                ref={nodeRef}
                className={`
                ${styles.PopupWrapper}
                ${isOpen && !isMinimised ? styles.OpenPopupWrapper : ""}
                ${isMinimised ? styles.MinimisedPopupWrapper: ""}
                ${active === id ? styles.ActivePopupWrapper : ""}
                `} 
                style={{
                    top: `calc(40px + (${index} * 12px))`,
                    left: `calc(40px + (${index} * 12px))`,
                }}
                onClick={() => {
                    setActive(id);
                }}
                >
                    <div className="Titlebar">
                        <h2>System Error</h2>
                        <button className="CloseButton" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    <div className="body">
                        <Image
                            src={id === "error-3" ? "/Images/ShyShutDown.png" : "/Images/Error.png"}
                            alt="Error Icon"
                            height={32}
                            width={32}
                        />
                        {children}
                    </div>
                    <button className="CancelButton" onClick={handleClose}>
                        OK
                    </button>
            </div>
        </Draggable>  
    );
}

export default Popup;