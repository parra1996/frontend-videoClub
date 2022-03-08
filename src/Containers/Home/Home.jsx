import React, { useState,useEffect } from 'react';

import {useNavigate} from 'react-router-dom';
import './Home.css'


const Home = () => {

    let navigate = useNavigate();

    //Primero comprobamos en el hook si tenemos el token (estamos logeados)
    const [credenciales, setCredenciales] = useState(JSON.parse(localStorage.getItem("dataUser")));

    const takeMeLogin = () => {
        setTimeout(()=>{
            navigate("/login");
        },500)
    }
    console.log(credenciales?.dataUser?.token)
    if(credenciales?.dataUser?.token !== undefined){

        return(
            <div>
                Hola {credenciales.dataUser.nombre}, bienvenido a tu app favorita
            </div>
        )

    }else{
        return(
            <div className='homeDesign'>
                In case you are not logged in, please do it
                <div className='designBotonHome' onClick={()=>takeMeLogin()}>
                    LOGIN
                </div>
            </div>
        )
    }
}

export default Home ; 