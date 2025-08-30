"use client";

import { useForm, ValidationError} from "@formspree/react";
import { SubmissionData, FieldValues } from "@formspree/core";
import styles from "./styles.module.scss";


const ContactForm = () => {
    const [state, handleSubmit] = useForm("xyzdebyk");

    const onSubmit = async (
        data: React.FormEvent<HTMLFormElement> | SubmissionData<FieldValues>
    ) => {
        await handleSubmit(data);
        window.alert("Mail sent!")
    }

    return(
        <form className={styles.SubmissionForm} onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
            <label htmlFor="email">Message</label>
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );   
}

export default ContactForm;