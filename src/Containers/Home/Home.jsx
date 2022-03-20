
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { raiz } from '../../utiles';
import './Home.css';
import ReactPlayer from 'react-player';


const Home = () => {

   return (
      <div className='designHome'>
         <ReactPlayer
            url='https://jp1996.s3.eu-west-3.amazonaws.com/yt1s.io-The+Most+Beautiful+Shots+in+Movie+History+II-(480p).mp4'
            width="100vw"
            height="42.2em"
            controls={true}
            playing={true}
            // id="ZVO99z6eWIzw5Gh61mTmrTMJRIvNPH9F"
            volume={0.6}
         />

           {/* <ReactPlayer
            url={require('../../img/intro.mp4')}
            width="100vw"
            height="42.2em"
            controls
            playing
            id="ZVO99z6eWIzw5Gh61mTmrTMJRIvNPH9F"
            volume={0.6}
         /> */}

      </div>
   )
}

export default (Home);