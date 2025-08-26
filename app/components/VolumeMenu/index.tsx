import styles from "./styles.module.scss";
import Image from "next/image";
import { useAppContext } from "@/app/utils/context";
import { useState } from 'react';

interface Props{
    isOpen: boolean;
}

const VolumeMenu = ({isOpen}: Props) => {
    const { volume, setVolume, isMuted, setIsMuted } = useAppContext();
    return(
        <div className={`${styles.VolumeMenuWrapper} ${isOpen ? styles.Open : ""}`}>
            <h2>Volume</h2>
            <div className={styles.VolumeSlider}>
                <Image
                    src="/Images/VolumeControl.png"
                    alt="Volume Control"
                    height={142}
                    width={26}
                    className={styles.volumeControl}
                ></Image>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
            </div>
            <div className={styles.MuteWrapper}>
                <input
                    type="checkbox"
                    checked={isMuted}
                    onChange={(e) => setIsMuted(e.target.checked)}
                />
                <span>M</span>ute
            </div>
        </div>
    );
};

export default VolumeMenu;