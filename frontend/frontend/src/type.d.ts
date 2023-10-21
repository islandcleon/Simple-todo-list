interface ITodo {
    id: number
    description: string
    status: number
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: number
    todos: ITodo[]
    todo?: ITodo
  }
  