
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

const Login = () => {

    let navigate = useNavigate();

    //1-Hooks (equivalen al estado en los componentes de clase)
    const [credenciales, setcredenciales] = useState("");
    const [datosUsuario, setDatosUsuario] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");

    //Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };

    const checkPassword = (e) => {

        if(e.target.value.length < 4){
            setMsgError("EL password debe de tener 4 caracteres");
        } else {
            setMsgError("");
        }

    };

    //3-useEffect

    // useEffect(()=>{
    //     //Este useEffect, sólo se ejecuta la primera vez que
    //     //se monta el componente. Se diferencia por el argumento 
    //     //de array vacio que hemos puesto

    //     console.log("Me he montado por primera y única vez");

    // },[]);

    useEffect(()=>{
        //Este useEffect se ejecutará por cada vez que se actualize el 
        //componente. Es decir, cuando cambie un hook y por lo tanto se actualize el componente.

        //Es peligroso cambiar hooks aqui, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.
        // console.log("Credenciales vale....", credenciales);

        if(credenciales?.token !== undefined){

            setTimeout(()=>{
                navigate("/");
            }, 3000);
            console.log(credenciales.token)
        };

    });

    //Funciones locales

    const login = async () => {

        try {

            let body = {
                 email: datosUsuario.email,
                 password: datosUsuario.password
            }

            let resultado = await axios.post("https://jppl-bbdd-videoclub.herokuapp.com/usuarios/login",body);

            //Cambiamos el valor del hook credenciales, por lo tanto se recargará el componente
            if(resultado.data === "Usuario o contraseña inválido"){
                setMsgError2("Usuario o contraseña inválido")
            }else{

                setcredenciales(resultado.data);
            }


        } catch (error) {

            console.log(error)

        }
    };

    const takeMeRegister = () => {
        setTimeout(()=>{
            navigate("/register");
        },1000);
    }
    //2-Render (lo que pinta en pantalla)

    if(credenciales?.token !== undefined){
        return(
            <div>Hola {credenciales?.usuario?.name}, bienvenido a Finder, 
            donde ligar ya no es un milagro.</div>
        )
    } else {
         
        return(
            
            <div className='loginDesign'>

                 {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>}

                <div className="designFormulario">
                    <input type="email" name="email" id="email" title="email" placeholder="Email" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="password" name="password" id="password" title="password" placeholder="Password" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkPassword(e)}}/>
                    {msgError}
                    {msgError2}
                </div>
                <div className="loginDesign2 espacio" onClick={()=>login()}>Log in</div>
                En caso de no estar registrado/a por favor, hazlo.
                <div className='designBotonHome' onClick={()=>takeMeRegister()}>
                    REGISTER
                </div>
            </div>
        );
    }
    

};

export default connect()(Login);