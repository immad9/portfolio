import { useContext } from "react";
import { MyContext } from "./MyContextProvider";

export const useMyContext = () => useContext(MyContext);