import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.css'
import { setNombre } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  let nombre = useSelector(state => state.nombre)
  let [inputNombre, setInputNombre] = useState("Nuevo nombre...")

  const handleChange = (e) => {
    setInputNombre(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(setNombre(inputNombre))
  }

  return (
    <div className="App">
      <h1>{nombre}</h1>
      <form onSubmit={handlerSubmit}>
        <input type="text" value={inputNombre} onChange={handleChange}/>
        <button>Cambiar Nombre</button>
      </form>
    </div>
  )
}

export default App
