import { Fragment, useState, useRef, useEffect   } from "react"
import { Box, Typography, } from "@mui/material"
import { SideBarTabs, SocialMedia } from "../content/sidebar.content"
import AboutME from "../components/about"
import Resume from "../components/resume"
import Contact from "../components/contact"
import Portfolio from "../components/portfolio"
import { useMyContext } from "../hooks/MyContext"
import { useNavigate } from "react-router"
import ToggleButton from "../components/toggleButton"
import HamburgerIcon from "../components/hamburgerIcon"

// import images and icons here
import { ProfilePic } from "../assets/images"

const About = ()=> {
  const {selectedTab,setSelectedTab} = useMyContext()
  const [open,setOpen] = useState(false)
  const navigate = useNavigate()
   const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false); // 👈 close sidebar when clicked outside
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  return (
    <Fragment>
    <Box component={"div"} display={"flex"} justifyContent={"flex-start"} bgcolor={"var(--bg-color)"} alignItems={"flex-start"}>       
        <Box ref={sidebarRef} component={"div"} onFocus={()=>{console.log("focus")}} onBlur={()=>{console.log("blur")}} borderRight={"1px solid var(--primary-color)"} height={"100vh"} sx={{overflowY:"auto",transition:"all 0.4s ease", overflowX:"hidden",transform: {xs: open ? "translateX(0)" : "translateX(-102%)",md: "translateX(0)"},}} bgcolor={"var(--bg-color)"}  display={"flex"} position={{xs:"absolute",md:"relative"}} zIndex={1800} alignItems={"center"} flexDirection={"column"} width={270}>
          <Box mt={3} component={"img"} loading="lazy" src={ProfilePic} draggable="false" alt="img_here" sx={{objectPosition:"center",width:140, height:140,display: "flex", alignItems: "center",justifyContent: "center", borderRadius:"50%",border: "5px solid color-mix(in srgb, var(--text-light), transparent 85%)",boxShadow: "0 4px 12px rgba(217, 44, 44, 0.1)",}}/>   
           <Typography variant="h6" sx={{fontSize:"24px",fontFamily:"var(--font-heading)",color:"var(--text-light)",fontWeight:600}} mt={1} mb={2}>Immad Hussain </Typography>
           <Box display={"flex"} justifyContent={"center"} gap={1}>
           {SocialMedia.map((e,i)=>
           <Box key={`key_${i}`} onClick={()=>{window.open(e.link, "_blank", "noopener,noreferrer");}} component={"small"} sx={{fontSize: 24, color: "var(--text-light)", cursor: "pointer", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(6px)", transition: "0.3s ease",
             "&:hover": {background: "rgba(255, 255, 255, 0.15)", color: "var(--primary-color)", transform: `translateY(-3px) ${((i+1))%2==0? "rotate(-10deg)" :"rotate(10deg)"} scale(1.1)`,},}}>{e.icon}</Box>
            )} 
           </Box>

           {/* tabs with icons start froms here */}
           <Box width={"100%"} display={"flex"} ml={3} mt={5} flexDirection={"column"} justifyContent={"center"} gap={4}>
          {SideBarTabs.map((e) => {
          const isSelected = selectedTab === e.name;
         return (<Typography key={e.name} onClick={e.name == "Home"? ()=>navigate("/") : () => setSelectedTab(e.name)}  fontSize={22} display="flex" alignItems="center" gap={2} fontWeight={400} color={isSelected ? "var(--primary-color)" : "var(--text-light)"} fontFamily="var(--font-body)" variant="p" width="fit-content"
          sx={{position: "relative",cursor: "pointer", transition: "all 0.3s ease", transform: isSelected ? "translateX(6px)" : "none",
         "& small": { color: isSelected ? "var(--primary-color)" : "inherit", transform: isSelected ? "rotate(20deg)" : "none",transition: "transform 0.3s ease",},
         "&:hover": !isSelected ? {color: "var(--primary-color)", transform: "translateX(6px)", }: {},
         "&:hover small": !isSelected ? {transform: "rotate(20deg)",transition: "transform 0.3s ease",} : {},
         "&::after": {content: '""', position: "absolute", left: 0, bottom: -3, height: "2px", width: isSelected ? "100%" : 0, backgroundColor: "var(--primary-color)", transition: "width 0.3s ease",},
         "&:hover::after": !isSelected? { width: "100%" } : {},}}>
      <Box
        component="small"
        sx={{
          color: "var(--primary-color)",
          fontSize: 22,
          lineHeight: 0,
        }}
      >
        {e.icon}
      </Box>
      {e.name}
    </Typography>
  );
})}

           </Box>
           </Box>

        <Box width={"100%"} sx={{overflowX:"hidden",overflowY:"auto"}} height={"100vh"}>
           <Box justifyContent={"space-between"} bgcolor={"var(--bg-color)"} px={{xs:2,md:3}} position={"sticky"} top={0} display={"flex"} alignItems={"center"} color={"var(--text-light)"} borderBottom={"1px solid var(--primary-color)"} height={56} width={"100%"}>
              <Typography sx={{position:"relative","&::after":{content: '""', position: "absolute", left: 0, bottom: 2, height: "2px", width: "50%",borderRadius:"100px", background: "linear-gradient(110deg, var(--bg-color), var(--primary-color) 100%)", transition: "width 0.3s ease",},"&:hover::after":{width:"100%"}}} variant="h5" fontSize={36} letterSpacing={3} fontWeight={600} fontFamily={"var(--font-heading)"}>{selectedTab}</Typography>
               <Box mr={"30px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={4}><ToggleButton/> <HamburgerIcon open={open} setOpen={setOpen}/></Box>
               
           </Box>
           {selectedTab == "About Me" && <AboutME/>}
            {selectedTab == "Resume" && <Resume/>}
            {selectedTab == "Contact" && <Contact/>}
            {selectedTab == "Portfolio" && <Portfolio/>}
        </Box>
       
    </Box>
  
    {/* scrollBar for small screens */}
        <Box display={{xs:"block", md:"none"}} width={290} height={50} sx={{background: "linear-gradient(110deg, #14191f 45%, var(--primary-color) 100%)", borderRadius: 4, position: "fixed", bottom: 20, left: 0, right: 0, margin: "auto", transition: "all 0.3s ease-in-out",}}>
         <Box component={"div"} height={"100%"} alignItems={"center"} display={"flex"} justifyContent={"space-evenly"}>
          {SideBarTabs.map((e)=><Box key={e.name} onClick={e.name == "Home"? ()=>navigate("/") : () => setSelectedTab(e.name)} component="small" sx={{fontSize:24, width:38, height:38, display:"flex", justifyContent:"center", alignItems:"center",  borderRadius:"50%", transition:"all 0.3s ease", ...(selectedTab === e.name? {transform:"translateY(-50%) scale(1.2)",bgcolor:"var(--primary-color)", color:"var(--text-light)"} : {color: "var(--primary-color)",bgcolor:"var(--text-light)",}) }}>{e.icon}</Box>)}
         </Box>
        </Box>

        </Fragment>
  )
}

export default About