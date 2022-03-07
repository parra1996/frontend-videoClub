import {useNavigate} from 'react-router-dom';
import './Home.css'

import { useState } from 'react';

const Home = () => {

    let navigate = useNavigate();

    //Primero comprobamos en el hook si tenemos el token (estamos logeados)
    const [credentials, setCredentials] = useState(JSON.parse(localStorage.getItem("dataUser")));

    const takeMeLogin = () => {
        setTimeout(()=>{
            navigate("/login");
        },1500)
    }

    if(credentials?.dataUser?.token !== undefined){

        return(
            <div>
                Hola {credentials.dataUser.nombre}, bienvenido a tu app favorita
            </div>
        )

    }else{
        return(
            <div className='homeDesign'>
                Hola foraster@, debes de logearte primero....
                <div className='designBotonHome' onClick={()=>takeMeLogin()}>
                    LOGIN
                </div>
            </div>
        )
    }
}

export default Home ; 