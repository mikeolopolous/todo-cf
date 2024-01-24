import { useEffect, useState } from 'react'

import FormTodo from './components/FormTodo'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (new_todo) => {
    setTodos([...todos, new_todo])
  }

  useEffect(() => {
    if (todos.length == 10) {
      console.log('Llegamos a 10 elementos en la lista de todos')
    }
  }, [todos])

  return (
    <>
      <h1>Código Facilito toDo</h1>
      <FormTodo addTodo={ addTodo }/>
      {
        todos.length == 0 ? <p>Sin todos</p> : <Todos todos={ todos }/>
      }
    </>
  )
} 

export default App
