import React, { useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Logo from '../assets/neko.svg'
import Aos from 'aos';
import { NavLink } from 'react-router-dom'
import ButtonArrow from '../components/ButtonArrow/ButtonArrow';
import "aos/dist/aos.css";

const Home = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <Navigation />

            <header>

                <div className="wrapper-logo">

                    <img data-aos="fade-right" id="logo" src={Logo} alt="logo" />

                    <h1 data-aos="fade-left" id="homefont"><strong>Adoption</strong> d'animaux ! ces <strong>chats</strong> ou <strong>chiens</strong> recherchent <br /> une famille, un foyer a aimer ! </h1>

                </div>
            </header>


            <h2 data-aos="fade-up" id="homefont" className="wrapper-logo"> Chats érrants ou maltraités, <br /> ces animaux ont besoin de vous pour une adoption! </h2>
            <section>
                <h2 data-aos="fade-up-right" className="h2-1">Neko Association, qui sommes-nous ?</h2>

                <div data-aos="flip-up" className="wrapper-text">

                    <p className="p2-1">Neko est une association qui vient en aide aux animaux en détresse ! On s'occupe des chiens, des chats, et des oiseaux. Nous les nourrissons et leur apportons tous les soins nécessaires pour ensuite leur trouver un foyer.
                    <NavLink className="nav-button" exact to="/Adoptions" activeClassName="nav-active">
                            <ButtonArrow buttonName="Nos adoptions" />
                        </NavLink></p>
                    <img id="catsbandage" src="./images/cats4.png" alt="chat avec un bandage" />
                </div>
            </section>


            <section >
                <h2 data-aos="fade-up-right" className="h2-1">Que faisons-nous ? Nos actions !</h2>
                <div data-aos="flip-up" className="wrapper-text">


                    <p className="p2-1"> Nous allons directement sur le terrain pour apporter notre aide. Il suffit de nous appeler ou de nous signaler les animaux dans le besoin.
                 
                    <NavLink exact to="/Conseils" activeClassName="nav-active">
                        <ButtonArrow buttonName="Nos conseils" />
                    </NavLink>
                    </p>
                    <img id="catseat" src="./images/cats.png" alt="chats qui mangent" />
                </div>
                <h2 data-aos="fade-up-right" className="h2-1">Comment les aider ?  </h2>
                <div data-aos="flip-up" className="wrapper-text">


                    <p className="p2-1"> un don paypal ou bien leurs offir un toit chaleureux en tant que famille d'accueil <br/>
                    <NavLink exact to="/Nous-soutenir" activeClassName="nav-active">
                            <ButtonArrow buttonName="Nous soutenir" />
                        </NavLink></p>.
                <img id="catseat" src="./images/cats2.png" alt="chat qui se repose" />
                </div>
            </section>

            <section >

                <h2 data-aos="fade-up-right" className="h2-1">La naissance de notre association</h2>
                <div className="history">
                    <img id="neko" src="./images/neko.png" alt="neko" />
                    <p data-aos="fade-up" >


                        Moi, c'est <strong>Neko</strong> ! Cette association a vu le jour grâce à moi et mon histoire !<br />
                        <br />
                    Je suis né début mars, avec ma maîtresse ce fut le coup de foudre!    <br />

                        <br />
                    J'étais un chat plutôt calme mais aussi très joueur et taquin, je savais comment faire pour obtenir ce que je voulais ! J'en faisais voir des vertes et des pas mur à ma maîtresse.
                    <br />
                    J'aimais beaucoup m'occuper des chatons que mes maîtres sauvaient du dehors, je les lavés, les réchauffés , leur montrer la gamelle pour qu'ils mangent, je faisais le papa et la maman !    <br />
                    Malheureusement j'avais des problèmes de santé, j'avais une coryza chronique pendant quelques années tout aller bien, j'avais les traitements adéquats.    <br /> Jusqu'au jour où ma santé c'est dégradée, cela m'as valut un long séjour à la clinique vétérinaire, l'on m'a soigné pour des "problèmes de reins" alors que j'avais juste un reins plus gros que la normal.    <br /> Un jour le vétérinaire, voyants que j'allais un peu mieux, m'a renvoyé chez moi.    <br />
                    Mais, je n'allais pas mieux, j’étais au plus mal.     <br />Mes poumons se sont remplis d'eau, j'avais du mal à respirer, j'étais en souffrance. Ma maîtresse m'a conduite d'urgence chez  un autre vétérinaire durant la nuit, après prise de sang et autres examens, nous avons découvert que j'avais la Pif.     <br />
                        <br />
                    Une maladie très grave pour un chats si elle n'est pas prise à temps.     <br />Ce fut trop tard pour moi, je me suis éteins 2 jours plus tard dans les bras de ma maîtresse à la clinique vétérinaire, à cause d'un mauvais diagnostic de départ.    <br />

                    Je suis à présent un ange qui continue à veillé et à protéger tous les autres animaux sur terre et j'accueil tous les animaux qui ont rejoins les anges dans mon royaume de Meowtopia !
                    <br />
                    Je suis aider par les membres de Neko associations pour continuer à accomplir mon rôle de papa et de maman !
                    <br />
                    Alors pourquoi ne pas venir nous aider vous aussi ?

                    </p>
                </div>
            </section>


            <h4 className="h3-1">Remerciments</h4>

            <h4 className="h3-1">Nos partenaires</h4>


            <h4 className="h3-1">Nos statuts</h4><br />

            <Footer />
        </div>
    );
};

export default Home;