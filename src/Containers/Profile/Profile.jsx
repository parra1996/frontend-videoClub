
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';

import "./Profile.css";

const Profile = (props) => {

    let navigate = useNavigate();

    //Hooks
    const [datosUsuario, setDatosUsuario] = useState({
        id : props.credentials.usuario.id,
        nombre: props.credentials.usuario.nombre,
        apellido: props.credentials.usuario.apellido,
        edad: props.credentials.usuario.edad,
        email: props.credentials.usuario.email,
        dni: props.credentials.usuario.dni,
        telefono: props.credentials.usuario.telefono,
        numCuenta: props.credentials.usuario.numCuenta
    });

    //Handler (manejador)
    const rellenarDatos = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })

    const updateUser = async () => {

        let body = {
            telefono: parseInt(datosUsuario.telefono),
        }

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            //Hacemos el update en la base de datos
            let res = await axios.put(`https://jppl-videoclub.herokuapp.com/newpassword/${props.credentials.usuario.id}`, body, config);

            if (res) {
                //Guardamos en redux
                props.dispatch({ type: MODIFY_CREDENTIALS, payload: datosUsuario });
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="designProfile">
            <div className="designProfileHalf profileLeft">
                <div className="profileField"><b>Nombre:</b>{props.credentials.usuario.name}</div>
                <div className="profileField"><b>Apellidos:</b>{props.credentials.usuario.surname}</div>
                <div className="profileField"><b>Email:</b>{props.credentials.usuario.email}</div>
                <div className="profileField"><b>Teléfono:</b><input type="text" name="telefono" id="telefono" title="telefono" placeholder={props.credentials.usuario.telefono} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </div>
            </div>
            <div className="designProfileHalf profileRight">
                <div className="updateBoton" onClick={() => updateUser()}>Update</div>

            </div>
        </div>
    )


}

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);