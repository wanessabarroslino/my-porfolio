import React from 'react'

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import './../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "Linekdin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/wanessa-barros-lino/"},
    { name: "Github", icon: <FaGithub />, link: "https://github.com/wanessabarroslino"},
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/wanessabarroslino/"},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className='social-btn' id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks