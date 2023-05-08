import { Link } from "react-router-dom"
import google from "../assets/GButton.jpg"

const marginTop = {
    marginTop : "15%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "#D9D9D9",
    backgroundColor: "#FAFAF7"
}

export default function Login(){
    return (
        <Link to="/" style={marginTop}>
            <img src={google} alt="google-sign-in-button" />
        </Link>
    )
}