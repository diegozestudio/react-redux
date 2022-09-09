import './App.css'

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setNombre } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  let nombre = useSelector(state => state.nombre)
  let [inputNombre, setInputNombre] = useState("Nuevo nombre...")

  const handleChange = (e) => {
    setInputNombre(e.target.value);
  };

  const handleSubmit = () => {
    e.preventDefault();
    dispatch(setNombre(inputNombre))
  }

  return (
    <div className="App">
      <h1>{nombre}</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <input type="text" value={inputNombre} onChange={handleChange} className="inputNombre"/>
        <button>Cambiar Nombre</button>
      </form>
    </div>
  )
}

export default App
