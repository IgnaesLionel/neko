import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Lounge from '../components/Lounge/Lounge';


const Adoptions = (props) => {
    return (
        <div>
            <h1 className="h1-1"> Nos adoptions </h1>
            <Lounge data={props.data}/>
        </div>
    );
};

export default Adoptions;