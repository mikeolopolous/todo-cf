const Todos = ({ todos }) => {
  return (
    <>
      <h2>Lista de Todos</h2>
      <ul>
        {
          todos.map((todo) => (
            <li key={ todo }>{todo}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Todos
