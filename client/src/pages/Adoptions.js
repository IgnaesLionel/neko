import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Lounge from '../components/Lounge/Lounge';


const Adoptions = (props) => {
    return (
        <div>
           
            <Lounge data={props.data}/>
        </div>
    );
};

export default Adoptions;