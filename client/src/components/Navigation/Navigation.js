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
                A propos
            </NavLink>
      
        </div>
    );
};

export default Navigation;