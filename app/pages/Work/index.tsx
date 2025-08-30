import styles from "./styles.module.scss";
import Image from "next/image";

const Work = () => {
    return(
        <article className={styles.WorkPage}>
            <div className={styles.SideBySide}>
                <div>
                    <h2>Tools, Frameworks, Libraries</h2>
                    <hr/>
                    <ul>
                        <li>Figma</li>
                        <li>Aseprite</li>
                        <li>GitHub</li>
                        <li>React</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div>
                    <h2>Programming Languages</h2>
                    <hr/>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Development</h2>
                <hr/>
                <Image
                src="/Images/UnderConstruction.gif"
                alt="temp image hope to make my own"
                width={1080}
                height={712}
                unoptimized
                />
                <ul>

                </ul>
            </div>
            <div>
                <h2>Resume</h2>
                <hr/>
                <embed
                    className={styles.resumeEmbed}
                    src="/raymond-zhang-resume.pdf"
                    type="application/pdf"
                    height="600"
                    width="100%"
                />
            </div>
        </article>
    )
}

export default Work;