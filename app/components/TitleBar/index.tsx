import styles from "./styles.module.scss";
import { forwardRef, useEffect, useRef} from "react";
import Image from "next/image";
import { VscChromeRestore, VscChromeMaximize } from "react-icons/vsc";
import { MdMinimize, MdClose } from "react-icons/md";

interface Props {
    title: string;
    src: string;
    alt: string;
    isMaximized: boolean;
    open: boolean;
    toggleMinimize: () => void;
    toggleMaximize: () => void;
    closeWindow: () => void;
}

const Titlebar = ({
  title,
  src,
  alt,
  isMaximized,
  open,
  toggleMinimize,
  toggleMaximize,
  closeWindow,
}: Props) => {
  const minimizeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && minimizeRef.current) {
      minimizeRef.current.focus();
    }
  }, [open]);

  return (
    <div className={`${styles.TitleBarWrapper} drag-handle`}>
        <Image
            src={src}
            alt={alt}
            height={32}
            width={32}
        />
      <h2>{title}</h2>
      <button onClick={toggleMinimize} ref={minimizeRef}>
        <MdMinimize />
      </button>
      <button onClick={toggleMaximize}>
        {isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}
      </button>
      <button onClick={closeWindow}>
        <MdClose />
      </button>
    </div>
  );
};

export default Titlebar;