import React from 'react';
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/neko.svg'

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={Logo} className="logo" alt="logo" />
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">      
                L'association
            </NavLink>
            <NavLink exact to="/Evenements" activeClassName="nav-active">      
                Nos événements
            </NavLink>
            <NavLink exact to="/Adoptions" activeClassName="nav-active">      
            ❤️Nos adoptions❤️ 
            </NavLink>
    
            <NavLink exact to="/Conseils" activeClassName="nav-active">      
                Nos conseils
            </NavLink>
            <NavLink exact to="/Nous-soutenir" activeClassName="nav-active">      
                Nous soutenir
            </NavLink>
            <NavLink exact to="/contact" activeClassName="nav-active">      
                Contact
            </NavLink>
      
        </div>
    );
};

export default Navigation;