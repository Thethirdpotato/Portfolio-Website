import styles from "./styles.module.scss";
import ContactForm from "@/app/components/ContactForm";
import PageWrapper from "@/app/components/PageWrapper";

const Contact = () => {
    return(
        <article className={styles.ContactPage}>
            <PageWrapper>
                <h2>Contact</h2>
                <p>
                    The quickest and easiest way to contact me is through email! <small> Or on social media </small> but pfft
                    why wouldn&apos;t you want to use this cool form down below?
                </p>
                <p>
                    Anyway, feel free to contact me for inquiries, bugs, or cool suggestions/additons that I could add on!
                </p>
                <ContactForm />
            </PageWrapper>
        </article>
    );
}

export default Contact;