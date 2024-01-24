import { useState } from "react"

const FormTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  const handleOnClick = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <input
        type='text'
        name='todo'
        placeholder='Ingresa toDo'
        value={ todo }
        onChange={ (e) => setTodo(e.target.value) }
        onKeyDown={ (e) => e.key == 'Enter' && handleOnClick() }
      />

      <button onClick={ handleOnClick }>
        Agregar toDo
      </button>
    </>
  )
}

export default FormTodo
