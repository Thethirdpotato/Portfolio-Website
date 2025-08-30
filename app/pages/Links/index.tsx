"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useAppContext } from "@/app/utils/context";
import {useState} from "react";
import Popup from "@/app/components/Popup";
import useSound from "use-sound";

const Links = () => {
    const{volume, isMuted} = useAppContext();
    const[showPopup, setShowPopup] = useState(false);
    const[selected, setSelected] = useState<string | null>(null);

    const[playError] = useSound("/sounds/error.mp3", {
            volume: isMuted ? 0 : volume,
        });

    const links: Record<string, string> ={
        "1": "http://www.linkedin.com/in/raymondzhang06",
        "2": "https://github.com/Thethirdpotato",
        "3": "https://www.instagram.com/rayzzhang",
    };

    const handleGo = () =>{
        if (selected && links[selected]){
            window.open(links[selected], "_blank");
        } else {
            setShowPopup(true);
            playError();
        }
    }

    return(
        <>
        <div className={styles.LinksPage}>
            <div className={styles.Links}>
                <div>
                    <Image
                    src="/Images/LinkedInLogo.png"
                    alt="LinkedIn"
                    height={48}
                    width={48}
                    >
                    </Image>
                    <span>
                        <input
                        type="radio"
                        name="links"
                        value="1"
                        onChange={(e) => setSelected(e.target.value)}
                        />
                        LinkedIn
                    </span>
                </div>
                <div>
                    <Image
                    src="/Images/GitHubLogo.png"
                    alt="GitHub"
                    height={48}
                    width={48}
                    >
                    </Image>
                    <span>
                        <input
                        type="radio"
                        name="links"
                        value="2"
                        onChange={(e) => setSelected(e.target.value)}
                        />
                        GitHub
                    </span>
                </div>
                <div>
                    <Image
                    src="/Images/InstagramLogo.png"
                    alt="Instagram"
                    height={48}
                    width={48}
                    >
                    </Image>
                    <span>
                        <input
                        type="radio"
                        name="links"
                        value="3"
                        onChange={(e) => setSelected(e.target.value)}
                        />
                        Instagram
                    </span>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles.Bottom}>
                <hr className={styles.SeparationLine}/>
                <button className={styles.NextButton} onClick={handleGo}>
                        Next &gt;
                </button>
            </div>
            <div>
                EASTER EGG
            </div>
        </div>
        {showPopup && (
            <Popup
            id="SelectionError"
            index={0}
            open={true}
            closeWindow={() => setShowPopup(false)}
            >
            <p>Please select an option before continuing.</p>
            </Popup>
        )}
        </>
    );
}

export default Links;