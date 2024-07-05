import React from 'react'

import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/wanessa.jpg'

import CurriculoPDF from './../Wanessa_Barros_Lino_Curriculo.pdf';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt='Wanessa Barros'/>
        <p className='title'>Desenvolvedora Front End</p>
        <SocialNetworks/>
        <InformationContainer/>
        <div className='btns'>
        <a href={CurriculoPDF} download='Wanessa_Barros_Lino_Curriculo.pdf' className='btn'>
            Download currículo
        </a>
        <a href='https://youtu.be/I5z9_m9Wtm8' target='_blank' rel="noopener noreferrer" className='btn'>
            Vídeo trajetória
        </a>
        </div>
    </aside>
  );
};

export default Sidebar