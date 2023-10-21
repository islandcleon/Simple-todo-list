import React from 'react'

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (todo: ITodo) => void
  completeTodo: (todo: ITodo) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo, completeTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : ''
  return (
    <div className='Card'>
      <div className='Card--text'>
        {/* <h1 className={checkTodo}>{todo.id}</h1> */}
        <h1 className={checkTodo} >{todo.description}</h1>

      </div>

      <div className='Card--button'>
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status !== 0 ? `hide-button` : 'Card--button__edit'}
        >
          Edit
        </button>
        <button
          onClick={() => completeTodo(todo)}
          className={todo.status !== 0 ? `hide-button` : 'Card--button__done'}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo)}
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
