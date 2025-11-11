import { SlSocialLinkedin, SlSocialFacebook   } from "react-icons/sl";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const SocialMedia = [
    {
        icon: <SlSocialLinkedin />,
        link:"https://www.linkedin.com/in/immadhusssain",
    },
    {
        icon: <PiWhatsappLogoLight/>,
        link:"https://wa.me/923250340043",
    },
    {
        icon: <SlSocialFacebook/>,
        link:"https://www.facebook.com/share/17bD5s6FdL/",
    },
    {
        icon: <IoMailOutline/>,
        link:"https://mail.google.com/mail/?view=cm&fs=1&to=immadh9@gmail.com"
    }
]    

const SideBarTabs = [
    {
        name:"Home",
        icon:<GoHome/>
    },
    {
        name:"About Me",
        icon:<FaRegUser/>
    },
    {
        name:"Resume",
        icon:<HiOutlineClipboardDocumentList/>
    },
    {
        name:"Portfolio",
        icon:<MdOutlinePhotoLibrary/>
    },
    {
        name:"Contact",
        icon:<BiPhoneCall/>
    },
    
]


export  {SideBarTabs, SocialMedia}