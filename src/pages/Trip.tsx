import Navbar from "../components/Navbar"
import "./Trip.css"
import { Timeline } from 'antd';
import { useParams } from "react-router-dom";

const trips = [
    {
        id:"0394472895897438",
        places:[
        { children: 'Nilambur', },
        { children: 'Ooty', },
        ]
    },
    {
        id:"872343268462387",
        places:[
        { children: 'Kodeikanal', },
        { children: 'Coorg', },
        ]
    }
]

export default function Trip(){
    const params = useParams()
    const trip:any = trips.find(trip => trip.id === params.tripId)
    return(
        <>
        <Navbar />
        <div className="divTimeline">
            <h2>Trip Details</h2><br />
            <Timeline items={[
                { children: 'Trip Start', color: 'red' },
                ...trip.places,
                { children: 'Trip Finish', color: 'red' },
            ]}  className="timeline"/>
        </div>
        </>
    )
}