import React,{useEffect} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Lounge from '../components/Lounge/Lounge';

const Adoptions = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div>
           <Navigation/>
            <Lounge data={props.data}/>

        </div>
    );
};

export default Adoptions;