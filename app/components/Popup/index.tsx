"use client";
import { ReactNode } from "react";
import Draggable from "react-draggable";

interface DraggablePopupProps {
    children: ReactNode;
}

const Popup = () => {
    <div className="PopupWrapper">
        <Draggable handle=".drag-handle" bounds="parent">
            
        </Draggable>
    </div>
}

export default Popup;