import { useState } from "react"
import HoursWorkedInput from "./HoursWorkedInput"

const DaysWorkedInput = ( { setDayCount, setHoursArray, hoursArray } ) => {

  const [inputComponents, setInputComponents] = useState([])

  const handleChange = (e) => {
    setDayCount(e.target.value)
    setHoursArray([])

    let arr = []
    arr.length = e.target.value

    for(let i = 0; i < arr.length; i++) {
      arr[i] = <HoursWorkedInput num={i + 1} key={i + 1} setHoursArray={setHoursArray} hoursArray={hoursArray} />
    }

    setInputComponents(arr)
  }

  return(
    <div className="days-and-hours-wrapper">
      <fieldset>
        <legend>Days & Hours</legend>
        <label>
          Number of Days
          <input onChange={ handleChange } type="number" min="0" placeholder="0" />
        </label>
        { inputComponents }
      </fieldset>
    </div>
  )
}

export default DaysWorkedInput