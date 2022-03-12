
import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import moment from "moment" ;

import './Rent.css';

const Rent = (props) => {

    let navigate = useNavigate();

    const alquilar = async () => {
        
        let body = {
            //este body corresponde al body de pedido de postman
            precio: 10,
            peliculaId: 1,
            usuarioId: props.idUser,
            fecha:'2022-03-12 18:56:38',
            fechaDev: '2022-03-15 18:56:38'
        }

        let config = {
            headers: { Authorization: `Bearer ${props.token}` }
        };

        try {

            let res = await axios.post("https://jppl-videoclub.herokuapp.com/pedidos",body,config);

            if(res){
                console.log(res);
                navigate("/");
                alert("tu pedido ha sido realizado con exito!");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="designRent" onClick={()=>alquilar()}>Alquilar</div>
    )
}

export default Rent;