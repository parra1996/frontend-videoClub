import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';

import './Admin.css'

const Admin = (props) => {

    let navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    const traerUsers = async () => {


        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get("https://jppl-videoclub.herokuapp.com/usuarios", config)

            console.log(res.data);

            setUsuarios(res.data);

        } catch (error) {
            console.log(error);
        }

    }

    const traerPedidos = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get(`https://jppl-videoclub.herokuapp.com/pedidos`, config)

            console.log(res.data);

            setPedidos(res.data);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        if (props.credentials.usuario.rol !== true) {
            navigate("/");
        }
        traerUsers()
        traerPedidos()
    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
    })


    if (usuarios[0]?.id !== undefined) {
        return (
            <div className="adminDesign">
                <div className='listaUsuarios'>
                    <p>LISTA DE TODOS LOS USUARIOS</p>
                    {
                        usuarios.map(usuarios => {
                            return (
                                <div key={usuarios.id} className="usuarios1" >

                                    <p>id:{usuarios.id}. Nombre: {usuarios.name} {usuarios.surname}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='listaPedidos'>
                    <p>LISTA DE TODOS LOS PEDIDOS</p>
                    {
                        pedidos.map(pedidos => {
                            return (
                                <div key={pedidos.id} className="pedidos1" >

                                    <p>id:{pedidos.id}. Nombre: {pedidos.name}. Pelicula:{pedidos.titulo}</p>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        )
    } else {
        return (
            <div className='designPelicula'>
                <div className="marginLoader">
                    <img src={require('../../img/spi.gif')} alt="cargador" />
                </div>
            </div>
        )
    }
}



export default connect((state) => ({
    credentials: state.credentials
}))(Admin)