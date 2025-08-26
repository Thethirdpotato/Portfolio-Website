import styles from "./styles.module.scss";
import Image from "next/image";
import { useAppContext } from "@/app/utils/context";
import { useState } from 'react';
import useSound from "use-sound";

interface Props{
    isOpen: boolean;
}

const StartMenu = ({isOpen}: Props) =>{
    const {showNextError, volume, isMuted} = useAppContext();
    const [imageSrc, setImageSrc] = useState('/Images/ClippyWave.gif')

    const [playShutDown] = useSound("/sounds/error.mp3", {
        volume: isMuted ? 0 : volume,
    });

    const [playConfetti] = useSound("/sounds/confetti.mp3", {
        volume: isMuted ? 0 : volume,
    });

    const handleClick = () => {
        setImageSrc('/Images/ClippyJump.gif');
    }

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
                onClick={() => {
                    handleClick();
                    playConfetti();
                }}
                width={133}
                height={236}
                unoptimized
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
                    <button onClick={() => {
                        showNextError();
                        playShutDown();
                    }}>
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
        </div>
    )
}

export default StartMenu;