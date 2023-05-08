import Navbar from "../components/Navbar"
import { Input, DatePicker } from "antd"
import type { DatePickerProps } from "antd"
import "./CreateTrip.css"

//details about date on changing date input
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

function Home() {

  function handleSubmit(event:any){
    event.preventDefault();
    if(event.target.tripName.value === "" || event.target.tripDate.value === "")
      alert("Please enter details")
  }
  
  return (
    <>
      <Navbar /> 
      <div className="form">
          <form className="input" onSubmit={handleSubmit} >
            <Input size="large" placeholder="Trip Name" name="tripName"/>
            <DatePicker onChange={onChange} className="date" name="tripDate"/> 
            <button className="button">+CREATE</button> 
          </form>
      </div>
    </>
  );
}
  
export default Home;