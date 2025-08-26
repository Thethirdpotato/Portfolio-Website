"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type PopupEntry = {
  id: string;
  content: React.ReactNode;
};

interface AppContextType {
  openList: string[];
  setOpenList: React.Dispatch<React.SetStateAction<string[]>>;
  openPopups: PopupEntry[];
  setOpenPopups: React.Dispatch<React.SetStateAction<PopupEntry[]>>;
  minimisedList: string[];
  setMinimisedList: React.Dispatch<React.SetStateAction<string[]>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  showNextError: () => void;
  volume: number;
  setVolume: (v: number) => void;
  isMuted: boolean;
  setIsMuted: (v: boolean) => void;
}

const popupSequence = ["error-1", "error-2", "error-3"];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children?: ReactNode }) => {
  const [openList, setOpenList] = useState<string[]>([]);
  const [openPopups, setOpenPopups] = useState<PopupEntry[]>([]);
  const [minimisedList, setMinimisedList] = useState<string[]>([]);
  const [active, setActive] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const popupContent = (id: string) => {
    switch (id) {
      case "error-1":
        return <p>I’m warning you don’t click me again!</p>;
      case "error-2":
        return <p>Hey stop that!</p>;
      case "error-3":
        return <p>That’s my no-no square don’t touch that!</p>;
      default:
        return <p>Unknown error</p>;
    }
  };

  const showNextError = () => {
    if (openPopups.length > 0) return;

    const nextId = currentIndex < popupSequence.length 
    ? popupSequence[currentIndex] 
    : popupSequence[0];

    if (!openPopups.some((p) => p.id === nextId)) {
      const newOpenPopups = [...openPopups, { id: nextId, content: popupContent(nextId) }];
      setOpenPopups(newOpenPopups);
    }

    if (!openList.includes(nextId)) {
      const newOpenList = [...openList, nextId];
      setOpenList(newOpenList);
    }

    setActive(nextId);

    if (currentIndex < popupSequence.length - 1) {
    setCurrentIndex(currentIndex + 1);
  }
  };

  return (
    <AppContext.Provider
      value={{
        openList,
        setOpenList,
        openPopups,
        setOpenPopups,
        minimisedList,
        setMinimisedList,
        active,
        setActive,
        showNextError,
        volume,
        setVolume, 
        isMuted, 
        setIsMuted
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppContextProvider");
  return ctx;
};