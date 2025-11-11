import { Box, Grid, Typography } from '@mui/material'


// import Images and icons here
import { AboutImg } from '../../assets/images'
import { TiPointOfInterestOutline } from "react-icons/ti";
import {Myself} from "../../content/aboutMe.content"


const AboutME = ()=> {
  
  return (
    <Box px={{xs:2,md:4}} pt={3} pb={{xs:12,md:6}}>
       <Box display={"flex"} height={"100%"} gap={3} flexDirection={{xs:"column-reverse", lg:"row"}} justifyContent={"space-between"} alignItems={{xs:"center",lg:"flex-start"}}>
         <Box>
         <Typography letterSpacing={2} fontSize={32} fontWeight={600} width={"fit-content"} color='var(--primary-color)' fontFamily={"var(--font-heading)"} sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}}>Who I Am</Typography> 
         <Typography mt={2} fontSize={20} fontWeight={400} color='var(--text-light)' fontFamily={"var(--font-body)"}>I am a dedicated MERN-Stack Developer specializing in high-performance, scalable web applications. I deliver complete end-to-end solutions, translating your vision into a functional and modern digital product. I'm committed to writing efficient code and following best practices to ensure your project's success.</Typography> 
         <Grid container flexDirection={{xs:"column", sm:"row"}} rowGap={3} mt={3}>
          {Myself.map((e)=><Grid key={e.heading} size={{sm:6}}><Typography display={"flex"} alignItems={"center"} gap={1} fontSize={18} fontWeight={600} color='var(--primary-color)' fontFamily={"var(--font-body)"}><TiPointOfInterestOutline/> {e.heading}: <Box color={"var(--text-light)"} component={"small"} fontWeight={400}> {e.value}</Box> </Typography></Grid>)}         
         </Grid>
         </Box>
         <Box draggable="false" component={"img"} src={AboutImg} alt='img_here' weight={{xs:250,md:380}} height={{xs:250,md:380}} sx={{objectFit:"contain"}}/>
       </Box>
    </Box>
  )
}


export default  AboutME
