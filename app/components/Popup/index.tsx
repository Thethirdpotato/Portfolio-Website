"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useAppContext } from "@/app/utils/context";

interface Props {
    children: ReactNode;
    index: number;
    open: boolean;
    closeWindow: () => void;
}

const Popup = ({ 
    children,
    index,
    open,
    closeWindow 
    }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [isMinimised, setIsMinimised] = useState(false);
    const { minimisedList, setMinimisedList, active, setActive } =
        useAppContext();

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        minimisedList.includes("System Error")
        ? setIsMinimised(true)
        : setIsMinimised(false);
    }, [minimisedList, "System Error"]);

    const handleMinimise = () => {
        setIsMinimised(true);
        setActive("");
        setMinimisedList([...minimisedList, "System Error"]);
    };

    const handleClose = () => {
        setIsOpen(false);
        closeWindow();
    }

    <div className={`
        ${styles.PopupWrapper}
        ${isOpen && !isMinimised ? styles.OpenPopupWrapper : ""}
        ${isMinimised ? styles.MinimisedPopupWrapper: ""}
    `} 
    style={{
        top: `calc(40px + (${index} * 12px))`,
        left: `calc(40px + (${index} * 12px))`,
    }}>
        <Draggable handle=".drag-handle" bounds="parent">
            <div className="Titlebar">
                <h2>System Error</h2>
                <button className="CloseButton" onClick={() => closeWindow()}>
                    X
                </button>
            </div>
            <div className="body">
                <Image
                    src="/Images/Error.png"
                    alt="Error Icon"
                    height={32}
                    width={32}
                />
                {children}
            </div>
            <button className="CancelButton">
                OK
            </button>
        </Draggable>
    </div>
}

export default Popup;