import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actualizarUsuarioAccion} from '../redux/usuarioDucks'

const Perfil = () => {

    const usuario = useSelector(store => store.usuario.user)
    //console.log(usuario)

    const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName)
    const [acitvarFormulario, setActivarFormulario] = useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = () => {
        dispatch(actualizarUsuarioAccion('Manuel 2.0'))
    }

    return (
        <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={usuario.photoURL} alt="" width="100px" className="img-fluid"/>
                    <h5 className="card-title">Nombre: {usuario.displayName}</h5>
                    <p className="card-text">Email: {usuario.email} </p>
                    <button 
                        className="btn btn-dark" 
                        onClick={() => setActivarFormulario(true) }
                        >
                            Editar Nombre
                    </button>
                </div>
                {
                    acitvarFormulario &&

                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        value={nombreUsuario}
                                        onChange={e => setNombreUsuario(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button 
                                            className="btn btn-dark" 
                                            type="button"
                                            onClick={() => actualizarUsuario()}
                                        >
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
             </div>
        </div>
    )
}

export default Perfil
