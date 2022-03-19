
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';

import "./Profile.css";

const Profile = (props) => {

    let navigate = useNavigate();

    const [pedidos, setPedidos] = useState([]);

    //Hooks
    const [datosUsuario, setDatosUsuario] = useState({
        id: props.credentials.usuario.id,
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

        mostrarPedido();
    }, [])

    useEffect(() => {

    });



    const mostrarPedido = async () => {

        let id = props.credentials.usuario.id;

        console.log(id, "este es el id")

        let res = await axios.post(`https://jppl-videoclub.herokuapp.com/pedidos/${id}`);

        console.log(res.data, "esto es el pedido");

        setPedidos(res.data);

    }

    const updateUser = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        let body = {
            telefono: parseInt(datosUsuario.telefono),
        }

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
                <div className="profileField"><b>Teléfono:</b><input type="text" name="telefono" id="telefono" title="telefono" placeholder={props.credentials.usuario.telefono} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>
                <div className="updateBoton" onClick={() => updateUser()}>Update</div>
            </div>
            <div className="designProfileHalf profileRight">
                <div>
                    <p>Lista de tus pedidos, {props.credentials.usuario.name}</p>
                    {
                        pedidos.map(pedidos => {
                            return (
                                    <div className="pedidos2" >
                                        <p>id:{pedidos.id}.
                                        {console.log(pedidos.id, "este es el id papa")}
                                            Title: {pedidos.titulo}.
                                            Email: {pedidos.email}</p>
                                        <img className='cartel3' src={pedidos.image} alt='imagenPelicula'></img>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>

            </div>
        </div>
    )


}

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);