import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/actions'
import '../App.css'
function PeliculasAsync() {
  const dispatch = useDispatch()
  let peliculas = useSelector((store) => store.peliculas)
  let [inputBuscador, setInputBuscador] = useState('')

  const handleChange = (e) => {
    setInputBuscador(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getMovies(inputBuscador))
    setInputBuscador('')
  }

  const estilosImagenes = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '30px',
    gap: '20px'
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputBuscador}
            onChange={handleChange}
            placeholder='Buscar...'
            className='inputNombre'
          />
          <button>Buscar</button>
        </form>
      </div>
      <div style={estilosImagenes}>
        {peliculas?.map((peli) => {
          return <img key={peli.imdbID} src={peli.Poster} alt='' />
        })}
      </div>
    </div>
  )
}

export default PeliculasAsync
