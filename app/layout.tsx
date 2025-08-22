import type { Metadata } from "next";
import "./globals.css";
import "./utils/colors.scss";
import styles from "./page.module.scss";
import Taskbar from "./components/Taskbar";
import { AppContextProvider } from "./utils/context";
import localFont from "next/font/local";

const MSSans = localFont({
  src: "../app/utils/fonts/ms-sans-serif-1.otf",
});


export const metadata: Metadata = {
  title: "Raymond Zhang",
  description: "Raymond Zhang personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MSSans.className}>
        <AppContextProvider>
          <main className={styles.AppWrapper}>
            {children}
            <Taskbar/>
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
