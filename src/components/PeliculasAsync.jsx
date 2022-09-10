import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/actions'

function PeliculasAsync() {
  const dispatch = useDispatch()
  let peliculas = useSelector((store) => store.peliculas)
  let [inputBuscador, setInputBuscador] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setInputBuscador(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getMovies(inputBuscador))
    setInputBuscador('')
  }

  useEffect(() => {
    // dispatch(getMovies())
  }, [dispatch])

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputBuscador}
            onChange={handleChange}
            placeholder='Buscar...'
          />
          <button>Buscar</button>
        </form>
      </div>

      {peliculas?.map((peli) => {
        return (
          <span key={peli.imdbID}>
            <img src={peli.Poster} alt='' />
          </span>
        )
      })}
    </div>
  )
}

export default PeliculasAsync
