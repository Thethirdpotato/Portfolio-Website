import styles from "./styles.module.scss";
import Image from "next/image";
import { useAppContext } from "@/app/utils/context";
import { useState } from 'react';
import { MdClose } from "react-icons/md";

interface Props{
    isOpen: boolean;
}

const StartMenu = ({isOpen}: Props) =>{
    const { openList, setOpenList } = useAppContext();

    const handleOpen = (name: string) => {
        openList.includes(name)
        ? setOpenList(openList)
        : setOpenList([...openList, name])
    };

    const [imageSrc, setImageSrc] = useState('/Images/ClippyWave.gif')

    const handleClick = () => {
        setImageSrc('/Images/ClippyJump.gif');
    }

    const [openPopup, setOpenPopup] = useState(false);

    return(
        <div className={`${styles.StartMenuWrapper} ${isOpen ? styles.Open : ""}`}>
            <div className={styles.NameBoard}>
                Raymond<span>95</span>
            </div>
            <div className={styles.TextBox}>
                <p>
                    Looks Like you found me!
                    <br></br><br></br>
                    Click on me for a fun animation!
                </p>
            </div>
            <button className={styles.Clippy}>
                <Image
                src={imageSrc}
                alt="Clippy"
                onClick={handleClick}
                width={133}
                height={236}
            />
            </button>
            <hr className={styles.SeparationLine}></hr>
            <ul className={styles.MenuItems}>
                <li>
                    <button>
                        <Image
                            src="/Images/Suspend.png"
                            alt="Suspend Icon"
                            height={43}
                            width={43}
                        />
                        Suspend
                    </button>
                </li>
                <li>
                    <button onClick={() => setOpenPopup(true)}>
                        <Image
                            src="/Images/ShutDown.png"
                            alt="Shut Down Icon"
                            height={43}
                            width={43}
                        />
                        Shut Down ...
                    </button>
                </li>
            </ul>
            {
                openPopup &&
                <div className="PopupWrapper"> 
                    <header className="TitleBarWrapper">
                        <h2>System Error</h2>
                        <button onClick={() => setOpenPopup(false)}>
                            <MdClose/>
                        </button>
                    </header>
                    <Image
                        src="/Images/Error.png"
                        alt="Error Icon"
                        height={32}
                        width={32}
                    />
                    <button onClick={() => setOpenPopup(false)}>
                        OK
                    </button>
                </div>
            }
        </div>
    )
}

export default StartMenu;