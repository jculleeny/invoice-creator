import EditableInput from "./inputs/EditableInput"

const InvoiceFinishedPrintable = () => {
  return(
    <div className="main-container">
      <header className="header">
        <h1>Invoice</h1>
        <span>Logo</span>
      </header>

      <article className="bill-from">
        <h2>Bill From:</h2>
        <ul className="styleless-list">
          <li><EditableInput text={"John Culleeny"} /></li>
          <li><EditableInput text={"926 Blue Heron Ave"} /></li>
          <li><EditableInput text={"Bainbridge Island, WA, United States"} /></li>
          <li><EditableInput text={"98110"} /></li>
          <li><EditableInput text={"(602)300-6263"} /></li>
          <li><EditableInput text={"jculleeny@gmail.com"} /></li>
        </ul>
      </article>

      <article className="bill-to">
        <h2>Bill To:</h2>
        <ul className="styleless-list">
          <li><EditableInput text={"Promosa"} /></li>
          <li><EditableInput text={"1265 Powell St"} /></li>
          <li><EditableInput text={"Vancouver, BC, Canada"} /></li>
          <li><EditableInput text={"1-888-610-6710"} /></li>
          <li><EditableInput text={"uspayables@promosa.ca"} /></li>
        </ul>
      </article>

      <article className="job-info">
        <h3>Details</h3>
        <ul className="styleless-list">
          <li>Date: <EditableInput text={"mm/dd/yy"} /></li>
          <li>Invoice #: <EditableInput text={"PRO-0001"} /></li>
          <li>Location: <EditableInput text={"Name"} /></li>
          <li>Job: <EditableInput text={"Name"} /></li>
        </ul>
      </article>

      <div className="details">
        {/* <div className="table-container"> */}
          <table className="payment-details-table">
            <thead>
              <tr>
                <th>Dates</th>
                <th>Description</th>
                <th>Daily Rate</th>
                <th>Clock In</th>
                <th>Clock Out</th>
                <th>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
            </tbody>
          </table>
        {/* </div> */}
    </div>
  </div>
  )
}

export default InvoiceFinishedPrintable