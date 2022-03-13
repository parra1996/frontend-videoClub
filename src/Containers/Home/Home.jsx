
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import {raiz} from '../../utiles';
import './Home.css';

const Home = () => {

   return(
       <div className='designHome'>
          soy home 
       </div>
   )
}

export default(Home);