import { useState } from "react"

const EditableInput = ({ text }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [textInput, setTextInput] = useState(text)

  const changeName = async (e) => {
    e.preventDefault()

    setTextInput(e.target.editable.value)
    setIsEditing(false)
  }

  const offClick = async (e) => {
    console.log('on blur')
    setTextInput(e.target.value)
    setIsEditing(false)
  }

  return (
    <>
      {
        isEditing ?
          <form onSubmit={ changeName }>
            <input
              // className="h2-input"
              name="editable"
              type="text"
              defaultValue={ textInput }
              onFocus={ e => e.target.select() }
              onBlur={ offClick }
              autoFocus
            />
          </form>
        :
          <span onClick={ () => setIsEditing(true) }>{ textInput }</span>
      }
    </>
  )
}

export default EditableInput