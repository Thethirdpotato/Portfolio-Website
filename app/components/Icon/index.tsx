"use client";

import Image from "next/image";
import Window from "@/app/components/Window";

import styles from "./styles.module.scss";
import { ReactNode, useState} from "react";
import { useAppContext } from "@/app/utils/context";

interface Props {
    index: number;
    name: string;
    src: string;
    alt: string;
    page?: ReactNode;
    noScroll?: boolean;
}

const Icon = ({ name, src, alt, page, noScroll, index}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { openList, setOpenList, minimisedList, setMinimisedList, setActive } =
    useAppContext();

    const handleOpen = async () => {
        setIsOpen(true);
        setActive(name);

        openList.includes(name)
        ? setOpenList(openList)
        : setOpenList([...openList, name]);

        minimisedList.includes(name)
        ? setMinimisedList(minimisedList.filter((item) => item !== name))
        : setMinimisedList(minimisedList);
    };

    const handleClose = () => {
        setIsOpen(false);
        setActive("");
        setOpenList(openList.filter((item) => item !== name));
    };

    return(
        <>
        <li 
        className={styles.IconWrapper}
        onClick={handleOpen}
        >
            <Image src={src} alt={alt} height={57} width={57}></Image>
            {name}
        </li>
        <Window
                title={name}
                src={src}
                alt={alt}
                noScroll={noScroll}
                open={isOpen}
                index={index}
                closeWindow={handleClose}
            >
                {isOpen && page}
            </Window>
        </>
    );
}

export default Icon;