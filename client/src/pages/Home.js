import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Logo from '../assets/neko.svg'
import Adoptions from '../pages/Adoptions';
const Home = (props) => {
    return (
        <div>
              <Navigation />
              <img id="logo" src={Logo} alt="logo" />
             <header>  
                 <h1>Adoption d'animaux ! ces chats ou chiens recherchent une famille, un foyer a aimer ! </h1>
    
             <Adoptions data={props.data}/>

           <h2 className="h1-1">Comment les aider ? un don ou un toit chaleureux en tant que famille d'accueil </h2>
           <h2 className="h2-1">Neko Association, qui sommes-nous ?</h2>
           <br />
       </header>
    
            <section>
                <h2 className="h2-1">Que faisons-nous ? Nos actions !</h2>
                L’association recueille chats et chatons !
                Leur situation et leur passé sont parfois difficiles (animaux trouvés dans la rue, abandonnés, donnés en cadeau, achetés de manière irréfléchie ou considérés comme des jouets, etc.)
                Leur présence peut aussi être due à divers changements intervenus dans la vie de leurs maîtres (déménagement, arrivée d’un enfant, déclaration d’allergie soudaine, décès, etc.)
                De plus, notre comité veille aux soins nécessaires à certains chats, en travaillant avec les services vétérinaires compétents.
                L’association ne dispose d’aucun refuge. Les familles d’accueil prennent sous leur toit des chats en attente d’adoption.
                Association pour les animaux en détresse à but non lucratif !
                On s'occupe des chiens, des chats, et des oiseaux. Nous les nourrissons et leur apportons tous les soins nécessaires pour ensuite leur trouver un foyer.
            </section> 

            <section className="contentP">
                <div clasName="left">
                    <p>Bonjour à tous,
                    Moi, c'est <strong>Neko</strong> ! Cette association a vu le jour grâce à moi et mon histoire !
                    <br />
                        Laissez moi vous la raconter !
                    <br />
                    Je suis né début mars, ma mère se nomme Félix, avec ma maîtresse ce fut le coup de foutre!    <br />
                    Elle et moi étions très fusionnel !! Mon petit surnom à moi c’était Meow car je miaulé cela.
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
                    <div className="right">
                    <img width="300px"src="neko.jpg" alt="chat neko" />
                    </div>
            </section>

            <section> 
            <h4 className="h3-1">Remerciments</h4><br />

            <h4 className="h3-1">Nos partenaires</h4><br />
            </section> 
           
            <h4 className="h3-1">Nos statuts</h4><br />
           
    <Footer/>
        </div>
    );
};

export default Home;