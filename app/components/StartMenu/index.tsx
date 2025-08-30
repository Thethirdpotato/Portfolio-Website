import styles from "./styles.module.scss";
import Image from "next/image";
import { useAppContext } from "@/app/utils/context";
import { useState, useEffect } from 'react';
import useSound from "use-sound";
import confetti from "canvas-confetti";
import {DvdScreensaver} from 'react-dvd-screensaver';
import { createPortal } from "react-dom";

interface Props{
    isOpen: boolean;
}

declare global {
  interface Window {
    __screensaverCleanup?: () => void;
  }
}

const StartMenu = ({isOpen}: Props) =>{
    const {showNextError, volume, isMuted} = useAppContext();
    const [isSSActive, setSSActive] = useState(false);
    const [imageSrc, setImageSrc] = useState('/Images/ClippyWave.gif')

    const [playShutDown] = useSound("/sounds/error.mp3", {
        volume: isMuted ? 0 : volume,
    });

    const [playSleepSound] = useSound("/sounds/sleep.mp3" , {
        volume: isMuted ? 0: volume,
    })

    const [playConfetti] = useSound("/sounds/confetti.mp3", {
        volume: isMuted ? 0 : volume,
    });

    const handleClick = () => {
        setImageSrc('/Images/ClippyJump.gif');
    }

    useEffect(() => {
    if (!isSSActive) return;

    const startListenTimeout = window.setTimeout(() => {
      const stop = () => setSSActive(false);

      window.addEventListener("mousemove", stop);
      window.addEventListener("keydown", stop);

      const cleanup = () => {
        window.removeEventListener("mousemove", stop);
        window.removeEventListener("keydown", stop);
      };

    }, 200);

    return () => {
      clearTimeout(startListenTimeout);

        if (typeof window.__screensaverCleanup === "function") {
        window.__screensaverCleanup();
        delete window.__screensaverCleanup;
        }
    };
  }, [isSSActive]);

    const triggerConfetti = () => {
        confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.05, y: 0.6}
    })
    }

    const screensaverOverlay = (
        <div
        style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
        }}

        onClick={() => setSSActive(false)}
        >
        <DvdScreensaver speed={3}>
            <Image
                src="/Images/FlyingTurtle.gif"
                alt="Turtle logo"
                width={140}
                height={84}
                unoptimized
            />
        </DvdScreensaver>
        </div>
    );

    return(
        <>
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
                    triggerConfetti();
                }}
                width={133}
                height={236}
                unoptimized
            />
            </button>
            <hr className={styles.SeparationLine}></hr>
            <ul className={styles.MenuItems}>
                <li>
                    {!isSSActive && (
                        <button
                            onClick={() => {
                            setSSActive(true);
                            playSleepSound();
                            }}
                        >
                            <Image
                            src="/Images/Suspend.png"
                            alt="Suspend Icon"
                            height={43}
                            width={43}
                            />
                            Suspend
                        </button>
                    )}
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

        {typeof document !== "undefined" && isSSActive
            ? createPortal(screensaverOverlay, document.body)
            : null}
        </>
    )
}

export default StartMenu;