import React, { useState } from 'react'

type Props = {
  editTodo: (e: React.FormEvent, formData: ITodo | any) => void
  todo: ITodo
}

const EditTodo: React.FC<Props> = ({ todo, editTodo }) => {
  const [formData, setFormData] = useState<ITodo>(todo)

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
    console.log(formData);
  }

  return (
    <form className='Form' onSubmit={(e) => editTodo(e, formData)}>
      <div>
        {/* <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div> */}
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' value={formData.description} />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false} >Edit Todo</button>
    </form>
  )
}

export default EditTodo
