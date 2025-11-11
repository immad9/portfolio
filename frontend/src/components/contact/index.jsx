import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import {CircularProgress, Box, Typography, TextField, FormControl, FormHelperText } from '@mui/material'
import { BgButton } from '../buttons'

// import icons and img here
import { ContactImg } from '../../assets/images'
import { FaRegPaperPlane } from "react-icons/fa";
import { ContactDetail } from '../../content/contact.content';
import formSubmitHandler from './formHandlers';

const Contact = ()=> {
  const [snackbar,setSnackbar] = useState({})
  const [loader,setLoader] = useState(false)
 const [userData,setUserData] = useState({
  name:"",
  email:"",
  message:"",
  subject:"",
 })
const [errors,setErrors] = useState({
  name:"",
  email:"",
  message:"",
  subject:"",
 })

 const handleChange = (e)=>{
   setUserData((prev)=>{
     return {...prev,[ e.target.name]:e.target.value}
  })
 }

 const formStyle = {
        "& .MuiInputBase-root": {  
          backgroundColor: "var(--paper-color)", // background color
          borderRadius: "8px",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "var(--text-light)", // default border color
          },
          "&:hover fieldset": {
            borderColor: "var(--text-light)", // hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--primary-color)", // focus border color
          },
        },
        "& .MuiInputBase-input": {
        //   padding: "8px 12px", // input padding
        fontSize: "16px", // input font size
        fontFamily:"var(--font-body)",
        color: "var(--text-light)", // input text color
        height:18,
        },    
        ".MuiInputBase-input::placeholder":{
            color:"#A0A0A0"
        }
 }

  return (
  <Box px={{xs:2,md:4}} pt={3} pb={{xs:12,md:6}}>
     <Typography letterSpacing={2} fontSize={32} fontWeight={600} width={"fit-content"} color='var(--primary-color)' fontFamily={"var(--font-heading)"} sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}}>Have an Idea? Let's Talk.</Typography> 
     <Typography maxWidth={600} mt={2} fontSize={20} fontWeight={400} color='var(--text-light)' fontFamily={"var(--font-body)"}>I'm available for freelance work. Tell me about your project, your goals, and your timeline. Let's make it happen.</Typography> 
   <Box display={"flex"} gap={3} mt={3} justifyContent={"space-between"} alignItems={"center"} flexDirection={{xs:"column", md:"row"}}>      
    <Box draggable="false" component={"img"} src={ContactImg} alt='img_here' width={"90%"} maxWidth={{xs:380,md:230,lg:380}} maxHeight={{xs:380,md:230,lg:380}} sx={{objectFit:"contain"}}/>
    
     <Box mt={6} sx={{boxShadow: "0 4px 10px rgba(0,0,0,0.3)", }} maxWidth={600} width={"90%"} borderRadius={4} bgcolor={"var(--paper-color)"} p={2}>
      <Box display={"flex"} justifyContent={"space-between"} gap={2} flexDirection={{xs:"column", sm:"row"}}>
      <FormControl fullWidth>
      <Typography variant='body2' mb={1} sx={{fontFamily:"var(--font-body)", color: "var(--primary-color)", fontWeight: 500 }}>Your Name</Typography>  
      <TextField value={userData.name} name='name' onChange={handleChange} sx={formStyle} type="text" placeholder='John Doe' variant="outlined" aria-describedby="my-helper-text" />
      <FormHelperText sx={{ml:0,fontFamily:"var(--font-body)",color:"#d32f2f",fontSize:12}} id="my-helper-text">{errors.name}</FormHelperText>
     </FormControl>
     
      <FormControl fullWidth>
      <Typography variant='body2' mb={1} sx={{fontFamily:"var(--font-body)", color: "var(--primary-color)", fontWeight: 500 }}>Email Address</Typography>  
      <TextField value={userData.email} name='email' onChange={handleChange} inputMode='email' sx={formStyle} type="text" placeholder='abc@example.com' variant="outlined" aria-describedby="my-helper-text" />
      <FormHelperText sx={{ml:0,fontFamily:"var(--font-body)",color:"#d32f2f",fontSize:12}} id="my-helper-text">{errors.email}</FormHelperText>
     </FormControl>
      </Box>  

     <FormControl fullWidth sx={{my:3}}>
      <Typography variant='body2' mb={1} sx={{fontFamily:"var(--font-body)", color: "var(--primary-color)", fontWeight: 500 }}>Subject</Typography>  
      <TextField value={userData.subject} name="subject" onChange={handleChange} sx={formStyle} type="text" placeholder='Subject of your message' variant="outlined" aria-describedby="my-helper-text" />
      <FormHelperText sx={{ml:0,fontFamily:"var(--font-body)",color:"#d32f2f",fontSize:12}} id="my-helper-text">{errors.subject}</FormHelperText>
     </FormControl>

     <FormControl fullWidth sx={{mb:3}}>
      <Typography variant='body2' mb={1} sx={{fontFamily:"var(--font-body)", color: "var(--primary-color)", fontWeight: 500 }}>Message</Typography>  
      <TextField required value={userData.message} multiline name="message" onChange={handleChange} rows={6} sx={formStyle} type="text" placeholder='Write your message here...' variant="outlined" aria-describedby="my-helper-text" />
      <FormHelperText  sx={{ml:0,fontFamily:"var(--font-body)",color:"#d32f2f",fontSize:12}} id="my-helper-text">{errors.message}</FormHelperText>
     </FormControl>

      <Box component={"div"} width={"fit-content"} display={loader} onClick={()=>formSubmitHandler(userData, setErrors, setSnackbar, setLoader)}><BgButton text={loader? <CircularProgress sx={{color:"var(--text-light)"}} size={24}  /> : "Submit"} icon={!loader && <FaRegPaperPlane/>} sx={{gap:10}}/></Box>
     </Box>   
   </Box>
       
    <Box fontFamily={"var(--font-body)"} fontSize={18} fontWeight={600} component={"div"} my={6} width={"100%"} sx={{color:"var(--primary-color)",display:"flex",gap:1}}><Box component={"hr"} width={"100%"} border={0} borderTop={"2px solid #393E46"}/> OR <Box width={"100%"} border={0} borderTop={"2px solid #393E46"} component={"hr"}/></Box>  
    
    <Box display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"} gap={3}>
      {ContactDetail.map((e)=>{
        const Icon = e.icon  
       return(
       <Box key={e.heading}>
         <Box display={"flex"} alignItems={"center"} gap={2} sx={{bgcolor:"var(--paper-color)",p:2,borderRadius:4,width:250, transition: "all 0.3s ease","&:hover svg": {transform: "scale(1.1)",color:"var(--primary-color) !important",bgcolor:"#fff !important"},"&:hover": {
              transform: "translateY(-5px)", // lift effect
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)", // shadow glow
              bgcolor: "var(--paper-color)", // slightly lighter background
            },}}> 
            <Icon strokeWidth={"0.8px"} style={{width:"26px",height:"26px",padding:4,backgroundColor:"var(--primary-color)",borderRadius:"8px",color:"var(--text-light)",transition: "transform 0.3s ease",}}/>
            <Box>
               <Typography lineHeight={1.5} fontSize={14} variant='body2' color='var(--primary-color)' fontFamily={"var(--font-body)"} fontWeight={400}>{e.heading} :</Typography>
               <Typography fontSize={16} variant='body1' color='var(--text-light)' fontFamily={"var(--font-body)"} fontWeight={600}>{e.text}</Typography>
            </Box>
         </Box>
        </Box>)
      })} 
    </Box>
     <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Box>
  )
}

export default  Contact
