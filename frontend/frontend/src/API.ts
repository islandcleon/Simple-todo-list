import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:5000'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const todos: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + '/tasks'
      )
      console.log(todos.data);
      return todos
    } catch (error) {
      throw error
    }
  }

export const addTodo = async (
    formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, 'id'> = {
            description: formData.description,
            status: 0,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + '/addTask',
            todo
        )
        return saveTodo
    } catch (error) {
        throw error
    }
}

export const updateTodo = async (
    todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, 'description'> = {
            description: todo.description,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/updateTask/${todo.id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
        throw error
    }
}

export const completeTodo = async (
    todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, 'status'> = {
            status: 1,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/updateStatus/${todo.id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
        throw error
    }
}

export const deleteTodo = async (
    todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, 'status'> = {
            status: 2,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/updateStatus/${todo.id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
        throw error
    }
}
