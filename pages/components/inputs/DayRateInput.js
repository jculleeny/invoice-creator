const DayRateInput = ( { setDayRate } ) => {

  const handleChange = (e) => {
    e.preventDefault()
    setDayRate(e.target.value)
  }

  return(
    <>
      <fieldset>
        <legend>Enter Day Rate</legend>
        <input id="day-rate" type="number" placeholder="" onChange={handleChange} />
      </fieldset>
    </>
  )
}

export default DayRateInput