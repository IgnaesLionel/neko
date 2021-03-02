import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Lounge from '../components/Lounge/Lounge';


const Adoptions = (props) => {
    return (
        <div>
            <Navigation/>
            <h1 className="h1-1"> Adoptions </h1>
            <Lounge data={props.data}/>
        </div>
    );
};

export default Adoptions;