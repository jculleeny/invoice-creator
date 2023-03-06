const HoursWorkedInput = ( { num, setHoursArray, hoursArray } ) => {

  const handleChange = (e) => {
    e.preventDefault()
    
    if(e.target.value <= 12) {
      setHoursArray( hoursArray => [...hoursArray, 12])
    } else if (e.target.value > 23) {
      console.log("error: Too many hours, add another day instead.")
    } else {
      setHoursArray( hoursArray => [...hoursArray, e.target.value])
    }
    console.log(hoursArray)
  }

  return (
    <div className="hours-input-wrapper">
      <label htmlFor="hours" >
        Day { num }
        <input onChange={ handleChange } type="number" placeholder="Hours" min="0" />
      </label>
    </div>
  )
}

export default HoursWorkedInput