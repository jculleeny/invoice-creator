const JobInfoInputs = () => {
  return (
    <div className="job-info-wrapper">
      <fieldset>
        <legend>Job Info</legend>
        <label>
          {/* Bill to */}
          <input type="text" placeholder="Bill to" list="client-names" />

          <datalist id="client-names">
            <option value="Promosa" />
          </datalist>
        </label>
        <label>
          {/* Job Name */}
          <input type="text" placeholder="Job Name" />
        </label>
        <label>
          {/* Location */}
          <input type="text" placeholder="Location" />
        </label>
      </fieldset>
    </div>
  )
}

export default JobInfoInputs