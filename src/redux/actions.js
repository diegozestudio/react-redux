export const SET_NOMBRE = "SET_NOMBRE"
export const SET_APELLIDO = "SET_APELLIDO"
export const ADD_PERSONA = "ADD_PERSONA"
export const DELETE_PERSONA = "DELETE_PERSONA"

export function setNombre(payload) {
    return { type: SET_NOMBRE, payload }
}

export function setApellido(payload) {
    return { type: SET_APELLIDO, payload}
}

export function addPersona(payload) {
    return { type: ADD_PERSONA, payload}
}

export function deletePersona (payload){
    return {type: DELETE_PERSONA, payload}
}