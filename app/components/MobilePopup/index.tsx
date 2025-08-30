"use client";
import {useEffect, useState} from "react";
import Popup from "@/app/components/Popup";
import useSound from "use-sound";
import { useAppContext } from "@/app/utils/context";

const MobilePopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { volume, isMuted} = useAppContext();

    const [playShutDown] = useSound("/sounds/error.mp3", {
            volume: isMuted ? 0 : volume,
    });

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setShowPopup(e.matches);
        }

        handleChange(mq);

        mq.addEventListener("change", handleChange);

        return () => {
            mq.removeEventListener("change", handleChange);
        };
    }, [playShutDown]);


    return(
        <>
        {showPopup && (
            <Popup
                id="MobilePopup"
                index={0}
                open={true}
                closeWindow={() => setShowPopup(false)}
            >
                <p>Hey! By the way, this is best experienced on desktop, so features may be buggy on different devices.</p>
            </Popup>
        )}
        </>
    );
}

export default MobilePopup;