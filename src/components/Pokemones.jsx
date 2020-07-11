import React from 'react';

import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion} from '../redux/pokeDucks'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    return (  
        <div className="row">
            <div className="col-md-6">
               <h3>Lista de Pokemones</h3>
                <br/>

                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 && 
                        <button onClick={() => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Get Pokemones</button>
                    }

                    {
                        next &&
                        <button onClick={() => dispatch(siguientePokemonAccion())} className="btn btn-dark">Siguiente</button>
                    }

                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())} className="btn btn-dark">Anterior</button>
                    }
                </div>

                <ul className="list-group mt-3">
                    {
                        pokemones.map(item => (
                            <li key={item.name} className="list-group-item text-uppercase">
                                {item.name} 
                                <button className="btn btn-dark btn-sm float-right">Info</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-6">
                    detalle de un pokemon
            </div>
        </div>
    );
}
 
export default Pokemones;