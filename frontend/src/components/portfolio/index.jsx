import { Box, Grid, Tooltip, Typography } from "@mui/material"
import { useState } from "react";
import { ProjectDetails } from "../../content/portfolio.content";
import { useMyContext } from "../../hooks/MyContext";

// import image sand text here:
import { IoCodeSlash, IoEyeOutline } from "react-icons/io5";

const Portfolio = () => {
const [hoveredIndex, setHoveredIndex] = useState(null);
const {theme} = useMyContext()

const openWindow = (url)=>{
  window.open(url, "_blank", "noopener,noreferrer");
}

  return (
     <Box px={{xs:2,md:4}} pt={3} pb={{xs:12,md:6}}>
         <Typography letterSpacing={2} fontSize={32} fontWeight={600} width={"fit-content"} color='var(--primary-color)' fontFamily={"var(--font-heading)"} sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}}>My recent works</Typography> 
         <Typography maxWidth={600} mt={2} fontSize={20} fontWeight={400} color='var(--text-light)' fontFamily={"var(--font-body)"}>Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</Typography> 
    <Grid container>
    {ProjectDetails.map((e,i)=>{
     const hovered = hoveredIndex === i;
     return(       
    <Grid key={e.siteName} mt={4} size={{xs:12,sm:6,lg:4}} spacing={4} display={"flex"} justifyContent={"center"}>    
     <Box onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} position={"relative"} overflow={"hidden"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{backgroundColor: "var(--paper-color)",width:280,height:268,borderRadius:"16px",transition:"all 0.3s ease"}}>
        <Box component={"img"} src={e.img} width={245} height={198} sx={{objectFit:"contain",opacity:hovered? 0.4 : 1}}/>  
          <Box position={"absolute"} left={0} bottom={0} width={hovered?"100%":"0px"} height={hovered?"100%":"0px"} sx={{transition:"all 0.3s ease",backgroundColor: "rgba(57, 62, 70, 90%)",}} >
            <Box  display={"flex"} justifyContent={"space-between"} flexDirection={"column"} height={"100%"}>
              <Box p={2}>
               <Typography fontFamily={"var(--font-body)"} fontSize={18} fontWeight={600} color="var(--primary-color)">{e.siteName}</Typography>
               <Typography mt={1} fontFamily={"var(--font-body)"} fontSize={12} lineHeight={1.5} fontWeight={400} color={theme === "dark"? "var(--text-light)" : "#EEEEEE"}>{e.text}</Typography>
             <Box component={"div"} display={"flex"} gap={1} alignItems={"center"} fontSize={28} mt={1}>
               {e.tectnologyIcons.map((e,i)=>{
                const Icons = e.icon
                return(<Tooltip key={`key:${i}`} slotProps={{tooltip:{sx:{fontFamily:"var(--font-body)",bgcolor:"var(--bg-color)",color:"var(--primary-color)"}}}} sx={{}} title={e.name}><Icons color="#007acc"/></Tooltip>)})}
            </Box>  
            </Box>
            <Box  p={2} display={"flex"} alignItems={"center"} gap={1} sx={{marginTop:"auto"}}> 
               <Tooltip slotProps={{tooltip:{sx:{fontFamily:"var(--font-body)",bgcolor:"var(--bg-color)",color:"var(--primary-color)"}}}} title="Code"><Box component={"div"} onClick={()=>openWindow(e.codeLink)} sx={{"&:hover":{bgcolor:"var(--text-light)"},width:45,height:22,bgcolor:"var(--primary-color)",borderRadius:2, cursor:"pointer", display:"flex",justifyContent:"center",alignItems:"center","svg":{color:"var(--text-light)",},"&:hover svg":{color:"var(--primary-color) !important"},}} ><IoCodeSlash/></Box></Tooltip>
               <Tooltip slotProps={{tooltip:{sx:{fontFamily:"var(--font-body)",bgcolor:"var(--bg-color)",color:"var(--primary-color)"}}}} title="Preview"><Box component={"div"} onClick={()=>openWindow(e.liveLink)} sx={{"&:hover":{bgcolor:"var(--text-light)"},width:45,height:22,bgcolor:"var(--primary-color)",borderRadius:2, cursor:"pointer", display:"flex",justifyContent:"center",alignItems:"center","svg":{color:"var(--text-light)",},"&:hover svg":{color:"var(--primary-color) !important"},}} ><IoEyeOutline/></Box></Tooltip>
            </Box>          
            </Box>
          </Box>
    </Box>
    </Grid>
    ) })}
    </Grid>
    </Box>
  )
}


export default Portfolio
