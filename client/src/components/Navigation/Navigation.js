import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'
import Navi from '../../assets/bandeau.svg'
import { UidContext } from "../AppContext";


const Navigation = () => {
    
    const uid = useContext(UidContext);
    return (
        <nav className="navigation">
 
            <NavLink exact to="/" activeClassName="nav-active">
                L'association
            </NavLink>
            <NavLink exact to="/Adoptions" activeClassName="nav-active">      
                Nos adoptions
            </NavLink>
            <NavLink exact to="/Conseils" activeClassName="nav-active">      
                Nos conseils
            </NavLink>
            <NavLink exact to="/Nous-soutenir" activeClassName="nav-active">      
                Nous soutenir
            </NavLink>
            <NavLink exact to="/contact" activeClassName="nav-active">      
                Contactez-nous
            </NavLink>
    
            {uid ?<NavLink exact to="/Ajout" activeClassName="nav-active">Ajouter</NavLink>:<NavLink exact to="/Signin" activeClassName="nav-active">🔒</NavLink>} 
            
            <img src={Navi} id="bandeau" alt="bandeau"/>
           
        </nav>
    );
};

export default Navigation;