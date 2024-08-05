import React, { createContext } from "react";
interface ILayoutCountext {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ILayoutCountext = {
  isMenuOpen: false,
  setIsMenuOpen: () => false,
};

export const LayoutContext = createContext<ILayoutCountext>(defaultValue);
