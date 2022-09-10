import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPersona, deletePersona } from '../redux/actions'

function Personas() {
  const dispatch = useDispatch()
  const personas = useSelector((store) => store.personas)
  let [input, setInput] = useState({
    nombre: '',
    apellido: '',
  })
  let [idDelete, setIdDelete] = useState("")

  const handleChange = (evento) => {
    evento.preventDefault()
    setInput({
      ...input,
      [evento.target.name]: evento.target.value,
    })
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    dispatch(addPersona(input))
    setInput({nombre: "", apellido: ""})
  }

  const handleDelete = (id) => {
    dispatch(deletePersona(id))
    // console.log(evento.target.id)
  }

  const handleIdDelete = (evento) => {
    evento.preventDefault()
    setIdDelete(evento.target.value)

  }

  const handleSubmitDelete = (evento) => {
    evento.preventDefault()
    dispatch(deletePersona(Number(idDelete)))
    setIdDelete("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Nombre:</span>{' '}
        <input
          name='nombre'
          type='text'
          value={input.nombre}
          onChange={(e) => handleChange(e)} //esto es valido
        />
        <br />
        <span>Apellido:</span>{' '}
        <input
          name='apellido'
          type='text'
          value={input.apellido}
          onChange={handleChange} // esto tambien xd
        />
        <br />
        <br />
        <button>Agregar persona</button>
      </form>
      <br />
      <hr />
      <br />

      <ul>
        {personas.map((persona) => {
          return (
            <li key={persona.id}>
              <span>{`${persona.nombre} ${persona.apellido} - `}</span>
              <button onClick={() => handleDelete(persona.id)}>Eliminar</button>
            </li>
          )
        })}
      </ul>
      <br />
      <hr />
      <br />

      <form onSubmit={handleSubmitDelete}>
        <span>{`ID: - `}</span> <input name="id" type='text' placeholder='ID' value={idDelete} onChange={handleIdDelete}/>
        <button>Eliminar</button>
      </form>
    </div>
  )
}

export default Personas
