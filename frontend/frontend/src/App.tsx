import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import { getTodos, addTodo, updateTodo, deleteTodo, completeTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [targetTodo, setTargetTodo] = useState<ITodo>({
    id: 0,
    description: '',
    status: 0
  });

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = () => {
    getTodos()
      .then(({ data }: ITodo[] | any) => {

        console.log(data);
        setTodos(data);
      })
      .catch((err: Error) => console.log(err))

  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not saved')
        }
        fetchTodos();
      })
      .catch((err) => console.log(err))
  }

  const handleShowEdit = (todo: ITodo): void => {
    setIsEdit(true);
    setTargetTodo(todo);
  }

  const handleUpdateTodo = (e: React.FormEvent, formData: ITodo): void => {
    updateTodo(formData)
      .then(({ status, data }) => {
        console.log(status);
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        fetchTodos();
      })
      .catch((err) => console.log(err))
  }

  const handleCompleteTodo = (todo: ITodo): void => {
    completeTodo(todo)
      .then(({ status, data }) => {
        console.log(status);
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        fetchTodos();
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteTodo = (todo: ITodo): void => {
    deleteTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not deleted')
        }
        fetchTodos();
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>My Duties</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {
        isEdit ? (
          <EditTodo
            todo={targetTodo}
            editTodo={handleUpdateTodo}
          />
        ) : (
          <div></div>
        )
      }

      {todos?.map((todo: ITodo) => (
        <TodoItem
          key={todo.id}
          completeTodo={handleCompleteTodo}
          updateTodo={handleShowEdit}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  )
}

export default App
