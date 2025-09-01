import styles from "./styles.module.scss";
import Image from "next/image";
import TitleBar from "@/app/components/TitleBar";
import MenuBar from "@/app/components/MenuBar";
import Draggable from "react-draggable";
import { ReactNode, useEffect, useState, useRef } from "react";
import { useAppContext } from "@/app/utils/context";

interface Props {
    title: string;
    src: string;
    alt: string;
    open: boolean;
    noScroll?: boolean;
    index: number;
    children: ReactNode;
    closeWindow: () => void;
}

const Window = ({
    title,
    src,
    alt,
    open,
    noScroll,
    index,
    children,
    closeWindow,
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimised, setIsMinimised] = useState(false);
    const [isMaximised, setIsMaximised] = useState(false);
    const { minimisedList, setMinimisedList, active, setActive } =
    useAppContext();

    const nodeRef = useRef(null);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        minimisedList.includes(title)
            ? setIsMinimised(true)
            : setIsMinimised(false)
    }, [minimisedList,title])

    const handleMinimise =() => {
        setIsMinimised(true);
        setActive("");
        setMinimisedList([...minimisedList,title]);
    }

    const handleMaximise = () => {
        setIsMaximised(!isMaximised);
    }

    const handleClose =() => {
        setIsOpen(false);
        closeWindow();
    }

    return(
        <Draggable
        key={isMaximised ? "max" : "norm"}
        nodeRef={nodeRef} 
        handle=".drag-handle"
        cancel="button, input, .no-drag"
        disabled={isMaximised}
        bounds="#PageContent"
        >
            <div 
            ref={nodeRef}
            className={`
            ${styles.WindowWrapper} 
            ${ isOpen && !isMinimised ? styles.OpenWindowWrapper : ""}
            ${ isMinimised ? styles.MinimisedWindowWrapper : ""}
            ${ isMaximised ? styles.MaximisedWindowWrapper : ""}
            ${ active === title ? styles.ActiveWindowWrapper : ""}
            ${ noScroll ? styles.NoScrollWindowWrapper : ""}
            `}
            style={{
                    top: `calc(40px + (${index} * 12px))`,
                    left: `calc(40px + (${index} * 12px))`,
                }}
            onClick={() => {
                    setActive(title);
                }}    
                >
                <TitleBar
                    title={title}
                    src={src}
                    alt={alt}
                    isMaximized={isMaximised}
                    open={isOpen}
                    toggleMaximize={handleMaximise}
                    toggleMinimize={handleMinimise}
                    closeWindow={handleClose}
                />
                <MenuBar />
                <div 
                    className={`
                        ${styles.ContentWrapper}
                        ${noScroll ? styles.NoScrollContentWrapper : ""}
                        `}>
                    {children}
                </div>
                <footer className={`
                    ${styles.PageBottom}
                    ${noScroll ? styles.NoScrollFooter : ""}
                    `}>
                    <div className={styles.Spacer}></div>
                    <div className={styles.FancySpacer}>
                        <Image
                        src="/Images/Computer.png"
                        alt="Spacer Icon"
                        width={35}
                        height={35}
                        />
                        My Portfolio
                    </div>
                </footer>
            </div>
        </Draggable>
    );
}

export default Window;