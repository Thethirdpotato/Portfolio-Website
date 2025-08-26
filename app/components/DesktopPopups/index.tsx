"use client";
import { useAppContext } from "@/app/utils/context";
import Popup from "@/app/components/Popup";

const DesktopPopupRenderer = () => {
  const { openPopups } = useAppContext();

  return (
    <>
      {openPopups.map((p, i) => (
        <Popup
          key={p.id}
          id={p.id}
          index={i}
          open={true}
          closeWindow={() => {}}
        >
          {p.content}
        </Popup>
      ))}
    </>
  );
};

export default DesktopPopupRenderer;