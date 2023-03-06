import { useState } from "react"
import DayRateInput from "./components/inputs/DayRateInput"
import DaysWorkedInput from "./components/inputs/DaysWorkedInput"
import InOutTimeInput from "./components/inputs/InOutTimeInput"
import JobInfoInputs from "./components/inputs/JobInfoInputs"

const Home = () => {

  let [ dayRate, setDayRate ] = useState(null)
  let [ dayCount, setDayCount ] = useState(null)
  let [ hoursArray, setHoursArray ] = useState([])
  // let [ hourly, setHourly ] = useState(null)

  let hourly = new Intl.NumberFormat('en-us',{
    style: 'currency',
    currency: 'USD'
  }).format( dayRate / 12 )

  return (
    <main>
      <DayRateInput setDayRate={setDayRate} />
      <DaysWorkedInput setDayCount={setDayCount} setHoursArray={setHoursArray} hoursArray={hoursArray} />
      <JobInfoInputs />
      <InOutTimeInput /> 
      <p>Day Rate: {dayRate}</p>
      <p>Hourly: {hourly}</p>
      <p>{dayCount}</p>
      <p>{hoursArray}</p>
      { console.log(hoursArray) }
    </main>
  )
}

export default Home