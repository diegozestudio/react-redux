import '../App.css'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setApellido, setNombre } from '../redux/actions'

function NombreYApellido() {
  const dispatch = useDispatch()
  let nombre = useSelector((store) => store.nombre)
  let [inputNombre, setInputNombre] = useState('')

  let apellido = useSelector((store) => store.apellido)
  let [inputApellido, setInputApellido] = useState('')

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setInputNombre(e.target.value)
  // }

  // const handleChangeApellido = (e) => {
  //   e.preventDefault()
  //   setInputApellido(e.target.value)
  // }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.name === 'nombre') {
      setInputNombre(e.target.value)
    } else if (e.target.name === 'apellido') {
      setInputApellido(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.name === 'nombre') {
      dispatch(setNombre(inputNombre))
    } else if (e.target.name === 'apellido') {
      dispatch(setApellido(inputApellido))
    }
  }

  return (
    <div className='App'>
      <h1>{`${nombre} ${apellido}`}</h1>
      <hr />
      <br />
      <form name='nombre' onSubmit={handleSubmit} className='formulario'>
        <input
          name='nombre'
          type='text'
          value={inputNombre}
          onChange={handleChange}
          placeholder='Nuevo nombre...'
          className='inputNombre'
        />
        <button>Cambiar Nombre</button>
      </form>
      <br />
      <hr />
      <br />
      <form name='apellido' onSubmit={handleSubmit} className='formulario'>
        <input
          name='apellido'
          type='text'
          value={inputApellido}
          onChange={handleChange}
          placeholder='Nuevo apellido...'
          className='inputNombre'
        />
        <button>Cambiar Apellido</button>
      </form>
    </div>
  )
}

export default NombreYApellido
