import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Lounge from '../components/Lounge/Lounge';


const Adoptions = (props) => {
    return (
        <div>
            <h2 className="h2-adoption"> Chats érrants ou maltraités, ces animaux ont besoin de vous pour une adoption! </h2>
            <Lounge data={props.data}/>
        </div>
    );
};

export default Adoptions;