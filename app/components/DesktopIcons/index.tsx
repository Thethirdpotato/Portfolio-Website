import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/app/pages/About"))
const Work = dynamic(() => import("@/app/pages/Work"))


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