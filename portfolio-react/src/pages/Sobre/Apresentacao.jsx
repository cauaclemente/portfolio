import "./Apresentaçao.css"
import IconWithText from './iconWithtext';

import Sobre from './Sobre';
import Perfil from '../../components/assets/foto-de-perfil.jpeg'
import { NavLink } from "react-router-dom";
import { FaGithub,  FaLinkedinIn } from "react-icons/fa6";


function Apresentação() {

  return (
    <>
      <div className="content-container" >
        <div className='profile-content'>
          <div className='profile-card'>
            <img className='profile-image' src={Perfil} alt="imagem de perfil" />
            <span className="name-text">Cauã Clemente</span>
                <span className="profile-text">
                    Seu potencial é ilimitado quando você se compromete
                    a aprender, crescer e criar!
                </span>
              <div className="social-midia">
                    <NavLink to= "https://www.linkedin.com/in/cau%C3%A3-clemente-3b59291a0/" target='_blank'>
                      <FaLinkedinIn className='linkedin'/>
                    </NavLink>
                    <NavLink to="https://github.com/cauaclemente" target='_blank'>
                      <FaGithub className='github' />
                    </NavLink>    
              </div>
              <div className="divider"></div>
                <h4>Habilidades </h4>
              <div className="icons-container">
                  <IconWithText 
                    iconName="React"
                    hoverText="React" />
                  <IconWithText 
                    iconName="JavaScript"
                    hoverText="JavaScript" />
                  <IconWithText 
                    iconName="TypeScript"
                    hoverText="TypeScript" />
                </div>
                <div className="icons-container">
                  <IconWithText 
                    iconName="Redux"
                    hoverText="Redux" />
                  <IconWithText 
                    iconName="Html"
                    hoverText="Html" />
                  <IconWithText 
                    iconName="Css"
                    hoverText="Css" />
                </div>
                <div className="icons-container">
                  <IconWithText
                    iconName="NodeJs"
                    hoverText="NodeJs" />
                  <IconWithText
                    iconName="PostgreSQL"
                    hoverText="PostgreSQL" />
                  <IconWithText
                    iconName="NextJs"
                    hoverText="NextJs" />
                </div>
            </div>
            <Sobre />
          </div>
        </div>
    </>
  )
}

export default Apresentação