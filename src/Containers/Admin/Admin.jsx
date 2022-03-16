import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux' ;
 
import './Admin.css'
 
const Admin = (props) => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{

        if (props.credentials.usuario.rol !== true) {
            navigate("/");
        }
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='adminDesign'>
            soy admin
        </div>
    )
}
export default connect ((state) => ({
    credentials : state.credentials 
}))(Admin)