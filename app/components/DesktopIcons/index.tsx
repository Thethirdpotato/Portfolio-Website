import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/app/pages/About"))
const Work = dynamic(() => import("@/app/pages/Work"))
const Links = dynamic(() => import("@/app/pages/Links"))
const Contact = dynamic(() => import("@/app/pages/Contact"))


interface IconData {
    name: string;
    src: string;
    alt: string;
    page: ReactNode;
    noScroll?: boolean;
}

const iconDataList: IconData[] = [
    {
        name: "About",
        src: "/Images/Files.png",
        alt: "Files icon",
        page: <About/>
    },
    {
        name: "Work",
        src: "/Images/Computer.png",
        alt: "Computer icon",
        page: <Work/>
    },
    {
        name: "Links",
        src: "/Images/NetworkNeighborhood.png",
        alt: "NetworkNeighborhood icon",
        page: <Links/>,
        noScroll: true
    },
    {
        name: "Contact",
        src: "/Images/Notepad.png",
        alt: "Notepad icon",
        page: <Contact/>,
    },
]

const DesktopIcons = () => {
    return (
        <ul className={styles.DestopIconsWrapper}>
            {iconDataList.map((iconData, index) => (
                <Icon
                    key={index}
                    index={index}
                    name={iconData.name}
                    src={iconData.src}
                    alt={iconData.alt}
                    page={iconData.page}
                    noScroll={iconData.noScroll}
                />
            ))}
        </ul>
    )
}

export default DesktopIcons;