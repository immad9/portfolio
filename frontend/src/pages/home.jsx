import { useState,useEffect } from "react";
import {Box, Grid} from "@mui/material"
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { H1,H2, Text3 } from "../components/responsiveText"
import { HandAnimation,HomeImg,} from "../assets/images";
import { BgButton, Button } from "../components/buttons";

// import icons here
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



const Home = () => {
const [index, setIndex] = useState(0);

const skills = [
  "MERN Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Js Developer",
];  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, [skills.length]);
  

  return (
    <Box px={{xs:2,md:6}}  bgcolor={"var(--bg-color)"}>
       <Grid container alignItems={"center"} flexDirection={{xs:"column-reverse",md:"row"}} height={{md:"100svh"}}>
        <Grid size={{xs:12,md:6}}>
           <Box maxWidth={500} color={"var(--text-light)"}>
             <H2 text="Hello," sx={{display:"inline"}}/>
              <Box draggable="false" component={"img"} sx={{verticalAlign:"center"}} display={"inline-block"} src={HandAnimation} alt="gif" width={38} height={38}/>
              <H2 text=" my name is" sx={{display:"inline"}}/>
              <H1 text="Immad Hussain" color="var(--primary-color)"/>
           </Box> 
  
          <Box sx={{maxWidth: 800}} mt={2}>
          <Text3 sx={{fontSize:22,lineHeight:"34px", display: "inline", color:("var(--text-light)") }} text="I'm a passionate web developer crafting seamless digital experiences. My expertise in "/>
          <Box sx={{display:"inline-block",width:"250px",bgcolor:"var(--primary-color)",textAlign:"center",borderRadius:2}}>
            <AnimatePresence mode="wait">
              <motion.span
                key={skills[index]}
                initial={{ y: "25%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-30%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  display: "inline-block",
                  fontSize:22,
                  lineHeight:"34px",
                  padding:"2px",
                  color:"var(--text-light)"          
                }}
              > {skills[index]}
              </motion.span>
            </AnimatePresence>
          </Box>
          <Text3 sx={{fontSize:22,lineHeight:"34px", display: "inline",color:("var(--text-light)") }} text=" allows me to build powerful, responsive applications from concept to deployment. Let's create something exceptional together. "/>
          </Box>

          <Box display={"flex"} alignItems={{md:"center"}} flexDirection={{xs:"column",sm:"row"}} my={5} gap={{xs:3,md:2.5,lg:4}}>
            <BgButton text="Resume" icon={<FileDownloadOutlinedIcon sx={{fontSize:"26px"}}/>}/>
            <Button text={"About Me"} icon={<PersonOutlineIcon sx={{fontSize:"26px"}}/>}/>
          </Box>
        </Grid>
        <Grid size={{xs:12,md:6}} display={"flex"} my={"auto"} justifyContent={"center"} alignItems={"center"}>
          <Box component={"img"} mt={2} src={HomeImg} maxWidth={550} maxHeight={550} width={"80%"} alt="imgHere"/>
        </Grid>
       </Grid>
    </Box>
  )
}

export default Home