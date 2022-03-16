import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux' ;
 
import './Admin.css'
 
const Admin = (props) => {
 
    let navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    
    const traerUsers = async () => {

        
        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get("https://jppl-videoclub.herokuapp.com/usuarios", config)
    
            console.log(res.data) ;

            setUsuarios(res.data);

        } catch (error){
            console.log(error);
        }

    }
 
    useEffect(()=>{

        if (props.credentials.usuario.rol !== true) {
            navigate("/");
        }
        traerUsers()
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
    },)

 
    if(usuarios[0]?.id != undefined){
        return(
            <div className="designRooster">

                {
                    //Voy a mapear las películas
                    usuarios.map(usuarios => {
                        //a cada elemento que voy a mapear
                        //le brindo un KEY (obligatorio) que lo distinguirá de
                        //el resto de elementos
                        return (
                            //Al mapear, cada elemento que se itera del array (en este caso pelicula es ese elemento),
                            //si le hacemos propiedad onclick y pasamos el elemento como argumento,
                            //a esa funcion le va a llegar el objeto que hayamos clickado entero
                            <div  key={usuarios.id} >
                                <p>{usuarios.name}</p>

                            </div>
                        )
                    })
                }
                
            </div>
        )
    }else{
        return (
            <div className='designPelicula'>
                <div className="marginLoader">
                    <img src={require('../../img/loader.gif')} alt="cargador"/>
                </div>
            </div>
        )
    }
}
 
    

export default connect ((state) => ({
    credentials : state.credentials 
}))(Admin)