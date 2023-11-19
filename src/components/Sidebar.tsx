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
        <a href={CurriculoPDF} download='Wanessa_Barros_Lino_Curriculo.pdf' className='btn'>
            Download currículo
        </a>
    </aside>
  );
};

export default Sidebar