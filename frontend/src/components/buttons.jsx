// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useMyContext } from "../hooks/MyContext";


const BgButton = ({text,icon,sx = "", download = true})=> {
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Immad Resume.pdf"; 
  link.download = "Immad Resume.pdf";
  link.click();
};
  return (
     <motion.button
      onClick={download && handleDownload}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "var(--primary-color)",
        borderRadius: "16px",
        padding: "12px 32px",
        width:190,
        height:48,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:7,
        border:"none",
        fontSize: "18px",
        fontFamily:"var(--font-body)",
        fontWeight: 600,
        cursor: "pointer",
        color: "var(--text-light) !important",
        ...sx
      }}
    >
     {icon} {text}
    </motion.button>
  )
}




const Button = ({text,icon})=> {
const {setSelectedTab} = useMyContext()
  const navigation = useNavigate()
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={()=>{setSelectedTab("About Me"), navigation("/about")}}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "12px 32px",
        width:190,
        height:48,
        border:"none",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:7,
        fontFamily:"var(--font-body)",
        fontSize: "18px",
        fontWeight: 600,
        cursor: "pointer",
        color: "var(--primary-color)",
      }}
    >
       {icon} {text}
    </motion.button>
   
  )
}




export {Button,BgButton}