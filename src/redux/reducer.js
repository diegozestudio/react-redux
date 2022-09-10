import { ADD_PERSONA, DELETE_PERSONA, GET_MOVIES, SET_APELLIDO, SET_NOMBRE } from "./actions";

const initialState = {
    nombre: "Diego",
    apellido: "Zamora",
    personas: [{nombre: "Diego", apellido: "Zamora", id: 1}, { nombre: "Lupi", apellido: "Lopez Pepa", id: 2 }],
    cantidadPersonas: 3,
    peliculas: []
};



function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOMBRE:
            return {
                ...state,
                nombre: action.payload
            };
        case SET_APELLIDO:
            return {
                ...state,
                apellido: action.payload
            };

        case ADD_PERSONA:
            return {
                ...state,
                personas: state.personas.concat({...action.payload, id: state.cantidadPersonas}),
                cantidadPersonas: state.cantidadPersonas + 1
                // personas: [ ...state.personas, action.payload ]
            }

        case DELETE_PERSONA:
            return{
                ...state,
                personas: state.personas.filter((persona) => persona.id !== action.payload)
            }    

        case GET_MOVIES: {
            return {
                ...state,
                peliculas: action.payload
            }
        }
        default:
            return state;
    }
}

export default rootReducer;