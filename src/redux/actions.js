export const SET_NOMBRE = "SET_NOMBRE"
export const SET_APELLIDO = "SET_APELLIDO"
export const ADD_PERSONA = "ADD_PERSONA"
export const DELETE_PERSONA = "DELETE_PERSONA"
export const GET_MOVIES = "GET_MOVIES"

export function setNombre(payload) {
    return { type: SET_NOMBRE, payload }
}

export function setApellido(payload) {
    return { type: SET_APELLIDO, payload }
}

export function addPersona(payload) {
    return { type: ADD_PERSONA, payload }
}

export function deletePersona(payload) {
    return { type: DELETE_PERSONA, payload }
}

export function getMovies(payload) {
    return async function (dispatch) {
        try {
            const url = `https://www.omdbapi.com/?apikey=33039b0b&s=${payload}`
            const resp = await fetch(url)
            const data = await resp.json()
            return dispatch({ type: GET_MOVIES, payload: data.Search })

            // fetch(`https://www.omdbapi.com/?apikey=33039b0b&s=${payload}`)
            //     .then((response) => response.json())
            //     .then((data) => { return dispatch({ type: GET_MOVIES, payload: data.Search }) })
        } catch (err) {
            console.log(err)
        }
    };
}