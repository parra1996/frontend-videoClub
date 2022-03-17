
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT, MOVIES_TITLE } from '../../redux/types';
import { connect } from 'react-redux';
import axios from 'axios';
import 'antd/dist/antd.css';
import {
    Input,
    Button
} from 'antd';

import './Header.css';

const Header = (props) => {

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        // console.log(props.credentials);
    })

    
    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    const manejador = (ev) => {
        setTitulo(ev.target.value);
    }

    const busquedaPorTitulo = async () => {
    
        //Axios que trae resultados....

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            let resultados = await axios.get(`https://jppl-videoclub.herokuapp.com/peliculas/titulo/${titulo}`, config);

            //Guardo en redux los resultados de las películas

            props.dispatch({type: MOVIES_TITLE, payload: resultados.data});

            setTimeout(()=>{
                navigate("/searchresults");
            },500);


        } catch (error) {
            console.log(error);
        }
    }

    if (!props.credentials?.token) {
        return (
            <div className='designHeader'>
                <div className="headerSpace">
                    <img className='homeButton' src={require('../../img/home4.png')} onClick={()=>navigate('/')} alt="home" />
                </div>
                <div className="headerSpace searchDesign">
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="find a movie by title" onChange={(ev)=>manejador(ev)}/>
                        <Button className='boton' onClick={()=>busquedaPorTitulo()} type="primary">Search</Button>
                    </Input.Group>
                    <div className="relleno"></div>
                </div>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/peliculas")}>Movies</div>
                    <div className="link" onClick={() => navegar("/login")}>Login</div>
                    <div className="link" onClick={() => navegar("/register")}>Registro</div>

                </div>
            </div>
        )
    } else {
        return (
            <div className='designHeader'>
                <div className="headerSpace">
                    <img className='homeButton' src={require('../../img/home4.png')} onClick={()=>navigate('/')} alt="home" />
                </div>
                <div className="headerSpace searchDesign">
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Busca una película por título" onChange={(ev)=>manejador(ev)}/>
                        <Button onClick={()=>busquedaPorTitulo()} type="primary">Go!</Button>
                    </Input.Group>
                    <div className="relleno"></div>
                </div>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navegar("/profile")}>{props.credentials?.usuario.name} {props.credentials?.usuario.surname}</div>
                    <div className="link" onClick={() => navegar("/admin")}>Admin</div>
                    <div className="link" onClick={() => navegar("/peliculas")}>Movies</div>
                    <div className="link" onClick={() => logOut()}>Logout</div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    credentials: state.credentials,
    search: state.search
}))(Header);