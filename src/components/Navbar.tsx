import ProfileDropDown from "./ProfileDropDown"
import { Link } from "react-router-dom"

const linkStyle = {
    textDecoration: "none",
    width: "max-content",
    backgroundColor: "#D9D9D9",
    color: "black",
}

export default function Navbar(){

    return(
        <nav>
            <p><Link to="/" style={linkStyle}>Trip Planner</Link></p>
            <ProfileDropDown />
        </nav>
    )
}