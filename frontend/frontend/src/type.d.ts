interface ITodo {
    id: int
    description: string
    status: int
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: int
    todos: ITodo[]
    todo?: ITodo
  }
  