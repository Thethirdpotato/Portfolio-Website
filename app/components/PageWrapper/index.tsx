import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface Props{
    noPadding?: boolean;
    children: ReactNode[];
}

const PageWrapper = ({ children, noPadding }: Props) => {
    return (
        <main className={`${styles.Page} ${noPadding ? styles.noPadding : ""}`}>
            {children}
        </main>
    );
}

export default PageWrapper;