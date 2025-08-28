import styles from "./styles.module.scss";
import Image from "next/image";
import PageWrapper from "@/app/components/PageWrapper";

const About = () => {
    return(
        <article className={styles.AboutPage}>
            <PageWrapper>
                <div className={styles.ProfilePicWrapper}>
                    <Image
                    className={styles.SP}
                    src="/Images/SelfPortrait.png"
                    alt="Me"
                    width={200}
                    height={200}
                    unoptimized
                    />
                    <div className={styles.StackedName}>
                        <h2>Raymond Zhang</h2>
                        <h3>
                            Comp Sci Student at Stony Brook University
                            <br/>
                            Aspiring Web developer/ programmer
                        </h3>
                    </div>
                </div>
                <hr/>
                <p>Hi! I’m <strong>Raymond</strong>, a student and aspiring web developer/ programmer.</p>
                <h4>Some Stuff About Me</h4>
                <ul>
                    <li>I love to learn and pick up new skills,</li>
                    <li>enjoy time with friends and family, and</li>
                    <li>do web development</li>
                </ul>

                <h4>Education</h4>
                <p>Bachelors of Science <br/>Class of 2027/8 
                <small> looking to graduate early!</small></p>

                <h4>Other Interests</h4>
                <ul>
                    <li>Web development</li>
                    <li>Studying languages</li>
                    <li>Physical fitness</li>
                    <li>Guitar</li>
                    <li>Stragety games</li>
                    <li>Pixel art</li>
                    <li>Crocheting</li>
                </ul>

                <footer><p>If your interested in working with me, contact me at <a href="mailto:Rzhang0325@gmail.com">Rzhang0325@gmail.com</a></p></footer>
            </PageWrapper>
        </article>
    );
}

export default About;