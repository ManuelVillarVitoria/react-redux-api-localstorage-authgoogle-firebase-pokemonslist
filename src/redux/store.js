import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'
import usuarioReducer from './usuarioDucks'

const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReducer
})

//https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers ( applyMiddleware(thunk) ))
    return store;
}