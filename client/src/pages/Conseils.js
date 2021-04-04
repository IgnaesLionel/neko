import React,{useEffect} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const Conseils = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <Navigation/>
            <h1 className="h1-1">Nos conseils</h1>

            <h2 className="h2-1">Conseils avant adoption</h2><br />
            <div className="wrapper-text">
                <p className="p2-1">Neko Association
            
                </p>
            </div>
            <h2 className="h2-1">Ce que dit la loi</h2><br />
            <div className="wrapper-text">
                <p className="p2-1">L’article L211-27 du Code rural et de la Pêche maritime prévoit des règles pour formaliser la bonne gestion des populations de chats errants. Le maire peut autoriser leur capture en vue de leur stérilisation et leur identification, puis leur réintégration sur leur lieu de vie.<br />
            
                </p>
            </div>

            <h2 className="h2-1">La stérélisation des chats</h2><br />
            <div className="wrapper-text">
                <p className="p2-1">Neko Association
            
                </p>
            </div>
            <h2 className="h2-1">L'identification</h2><br />           <div className="wrapper-text">
                <p className="p2-1">Neko Association
            
                </p>
            </div>
            <h2 className="h2-1">L'adoption d'un chat</h2><br />
            <div className="wrapper-text">
                <p className="p2-1">Neko Association
            
                </p>
            </div>
            <h2 className="h2-1">Bricolage</h2><br />
            <div className="wrapper-text">
                <p className="p2-1">Neko Association
            
                </p>
            </div>
            <h2 className="h2-1">Trucs et astuces</h2><br />
            <Footer />
        </div>
    );
};

export default Conseils;