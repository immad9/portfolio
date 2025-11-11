import React from 'react'
import { Box, Typography } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BgButton } from '../buttons'
import { Skills } from '../../content/resume.content';

// import Icon and image header
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LiaGraduationCapSolid } from "react-icons/lia";



const Resume = ()=> {
  
  return (
    <Box px={{xs:2,md:4}} pt={3} pb={{xs:12,md:6}}>
     <Typography letterSpacing={2} fontSize={32} fontWeight={600} width={"fit-content"} color='var(--primary-color)' fontFamily={"var(--font-heading)"} sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}}>Experiences</Typography> 
     
      <Box mt={3} display={"flex"} fontFamily={"var(--font-body)"} maxWidth={650}>        
         <Box pb={3} component={"small"} fontSize={32} color={"var(--primary-color)"} sx={{position:"relative","&::after":{content:'""',position:"absolute",top:33,left:"50%",width:2,height:"calc(100% - 33px)",backgroundColor: "var(--primary-color)",}}}><HiOutlineBriefcase/></Box>
          <Box pb={3} width={"100%"} mt={0.5} ml={1} fontFamily={"var(--font-body)"}>
             <Typography fontWeight={400} color='var(--text-light)' fontSize={"22px"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} alignItems={{sm:"center"}} justifyContent={"space-between"} width={"100%"}>Smart IT Innovation <Box pb={{xs:2,sm:0}} lineHeight={1} fontSize={"16px"} fontWeight={"400"} component={"small"}>(Jan 2025 - Nov 2025)</Box> </Typography>
             <Typography lineHeight={1} fontSize={14} fontWeight={400} color='var(--primary-color)'>MERN Stack Developer</Typography>
             <Typography color='var(--text-light)' mt={1} fontSize={18} fontWeight={400}><li>Worked on projects with interactive maps and location features for clients.</li><li>Helped the team with front-end and back-end tasks and learned more about the MERN stack.</li><li>Tested and fixed issues to make sure applications worked well and were easy to use.</li><li>Supported the team to complete projects on time and meet client requirements.</li></Typography>
          </Box>    
      </Box>
      
       <Box display={"flex"} fontFamily={"var(--font-body)"} maxWidth={650}>        
         <Box pb={3} component={"small"} fontSize={32} color={"var(--primary-color)"} sx={{position:"relative","&::after":{content:'""',position:"absolute",top:33,left:"50%",width:2,height:"calc(100% - 33px)",backgroundColor: "var(--primary-color)",}}}><HiOutlineBriefcase/></Box>
          <Box pb={3} width={"100%"} mt={0.5} ml={1} fontFamily={"var(--font-body)"}>
             <Typography fontWeight={400} color='var(--text-light)' fontSize={"22px"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} alignItems={{sm:"center"}} justifyContent={"space-between"} width={"100%"}>Soft Solution<Box pb={{xs:2,sm:0}} lineHeight={1} fontSize={"16px"} fontWeight={"400"} component={"small"}>(Sep 2024 - Jan 2025)</Box> </Typography>
             <Typography lineHeight={1} fontSize={14} fontWeight={400} color='var(--primary-color)'>Frontend Developer</Typography>
             <Typography color='var(--text-light)' mt={1} fontSize={18} fontWeight={400}><li>Developed responsive and user-friendly interfaces using React.js for web applications and React Native for mobile apps.</li><li>Collaborated with designers and backend developers to implement modern UI components and optimize user experience.</li><li>Integrated APIs and managed state using React Hooks and Context API.</li><li>Improved performance and load times through component optimization and code refactoring.</li><li>Participated in team code reviews and contributed to building reusable UI components.</li></Typography>
          </Box>    
      </Box>
      
     <Typography letterSpacing={2} mt={6} fontSize={32} fontWeight={600} width={"fit-content"} color='var(--primary-color)' fontFamily={"var(--font-heading)"} sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}}>Education</Typography> 
      
      <Box mt={3} display={"flex"} fontFamily={"var(--font-body)"} maxWidth={650}>        
         <Box pb={{xs:7,md:4}} component={"small"} fontSize={32} color={"var(--primary-color)"} sx={{position:"relative","&::after":{content:'""',position:"absolute",top:28,left:"50%",width:2,height:"calc(100% - 27px)",backgroundColor: "var(--primary-color)",}}}><LiaGraduationCapSolid/></Box>
          <Box width={"100%"} mt={0.5} ml={1} fontFamily={"var(--font-body)"}>
             <Typography fontWeight={400} color='var(--text-light)' fontSize={"22px"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} alignItems={{sm:"center"}} justifyContent={"space-between"} width={"100%"}>BS Computer Science <Box pb={{xs:1,sm:0}} lineHeight={1} fontSize={"16px"} fontWeight={"400"} component={"small"}>(2020 -  2024)</Box> </Typography>
             <Typography lineHeight={1} fontSize={16} fontWeight={400} color='var(--primary-color)'>COMSATS University of Islamabad</Typography>
          </Box>    
      </Box>
       
      <Box display={"flex"} fontFamily={"var(--font-body)"} maxWidth={650}>        
         <Box pb={4} component={"small"} fontSize={32} color={"var(--primary-color)"} sx={{position:"relative","&::after":{content:'""',position:"absolute",top:28,left:"50%",width:2,height:"calc(100% - 27px)",backgroundColor: "var(--primary-color)",}}}><LiaGraduationCapSolid/></Box>
          <Box width={"100%"} mt={0.5} ml={1} fontFamily={"var(--font-body)"}>
             <Typography fontWeight={400} color='var(--text-light)' fontSize={"22px"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} alignItems={{sm:"center"}} justifyContent={"space-between"} width={"100%"}>Intermediate<Box pb={{xs:1,sm:0}} lineHeight={1} fontSize={"16px"} fontWeight={"400"} component={"small"}>(2017 - 2019)</Box> </Typography>
             <Typography lineHeight={1} fontSize={16} fontWeight={400} color='var(--primary-color)'>Muhammad Ali Jinnah College</Typography>
          </Box>    
      </Box>
          
         {Object.keys(Skills).map((category) => (
       <Box mt={6} key={category}>
         <Typography mb={3} letterSpacing={2} textAlign={"center"} fontSize={32} fontWeight={600} width={"fit-content"} color='var(--primary-color)' fontFamily={"var(--font-heading)"} sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}}>{category}</Typography> 
         <Box display={"flex"} gap={3} flexWrap={"wrap"} alignItems={"center"} maxWidth={"85%"}>
         {Skills[category].map((e)=><Typography key={e} width={"fit-content"} px={2} py={1} borderRadius={2} fontSize={18} fontWeight={400} color='var(--text-light)' fontFamily={"var(--font-body)"} sx={{background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)"}}>{e}</Typography>)}
         </Box>
       </Box>
      ))}

      <Box textAlign={"center"} mt={8} bgcolor={"var(--paper-color)"} maxWidth={850} py={3} px={1} borderRadius={4} mx={"auto"}>
        <Typography fontSize={18} fontWeight={400} color='var(--text-light)' fontFamily={"var(--font-body)"}>For a detailed overview of my professional journey, skills, and experience, feel free to download my resume below.</Typography>
       <BgButton text={"Resume"} icon={<FileDownloadOutlinedIcon/>} sx={{margin:"15px auto 0 auto"}}/>
      </Box>


    </Box>
  )
}

export default Resume
