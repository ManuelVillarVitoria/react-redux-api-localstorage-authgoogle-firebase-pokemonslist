//https://github.com/erikras/ducks-modular-redux
import axios from 'axios'

//constants
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

//types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'

//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type) {
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actions
//With the dispatch we activate  the reducer and with getState we obtain the dataInicial
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {

    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        console.log(res.data)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        
    }catch(error){
        console.log(error)
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

    const {next} = getState().pokemones

    try {
        const res = await axios(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

    }catch(error) {
        console.log(error)
    }
}