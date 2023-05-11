import "./Trip.css"
import { Link } from "react-router-dom";

interface tripCard{
    id: string;
    img: string;
    name: string;
}

export default function Trip(props:tripCard){
    return(
        <Link to={`trip/${props.id}`} className="trip">
            <img src={props.img} alt="trip-picture"/>
            <p>{props.name}</p>
        </Link>
    )
}