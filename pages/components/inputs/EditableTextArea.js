import { useState } from "react"

const EditableTextArea = ({ name }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [budgetName, setBudgetName] = useState(name)

  const changeName = async (e) => {
    e.preventDefault()

    setBudgetName(e.target.editable.value)
    setIsEditing(false)
  }

  return (
    <div>
      {
        isEditing ?
          <form onSubmit={ changeName }>
            <textarea
              // className="h2-input"
              name="editable"
              id="editable"
              onFocus={ e => e.target.select() }
              autoFocus
            >
            { budgetName }
            </textarea>
            <input type="submit" value="Submit" />
          </form>
        :
          <span onClick={ () => setIsEditing(true) }>{ budgetName }</span>
      }
    </div>
  )
}

export default EditableTextArea