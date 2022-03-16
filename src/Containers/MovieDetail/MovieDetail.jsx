
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Rent from '../../Components/Rent/Rent';
import {raiz} from '../../utiles';

import './MovieDetail.css';

const MovieDetail = (props) => {

    let navigate = useNavigate();

    useEffect(()=> {
        //Compruebo si hay datos de la película escogida en redux, en caso de NO
        //haber datos, redirijo a HOME.

        if(props.search?.titulo === undefined){
            navigate('/');
        }
    });

        return(
            <div className='designFilm'>
                <div className="filmDetailHalf">
                    <div className="dataFilm">{props.search.titulo}</div>
                    <div className="dataFilm">{props.search.sinopsis}</div>
                    <div className="dataFilm">
                        {
                            //EN CASO DE QUE TOKEN SEA TRUE, SI SE INCLUYE EL ELEMENTO RENT
                            props.credentials.token && <Rent id={props.search.id} token={props.credentials.token} idUser={props.credentials.usuario.id}/>
                        }
                    </div>
                </div>
                <div className="filmDetailHalf">
                    <img className='cartel' src={props.search.image} alt={props.search.titulo}/></div>    
            </div>
        )
   
}

export default connect((state) => ({
    credentials: state.credentials,
    search : state.search
}))(MovieDetail);

