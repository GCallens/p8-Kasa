import "./accomodation.scss"
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Header from "../../components/header/Header";
import datas from "../../data/logements";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";
import redStar from '../../assets/red_star.png'
import greyStar from '../../assets/grey_star.png'

function Accomodation() {

    // Déclaration de la variable d'état, imageCarousel est la donnée, setImageCarousel est la variable
    // qui va permettre de modifier cette donnée
    const [imageCarousel, setImageCarousel] = useState([])

    // useParams récupère les paramètres de l'url, ici avec le numéro d'id
    const idAccomodation = useParams('id').id;
    const dataAccomodation = datas.filter(data => data.id === idAccomodation);
    // La méthode filter va chercher dans datas puis
    // ( si l'id de la data est strict égal à l'idAccomodation => résultat )

    // on va chercher les : name, rating, description,
    // equipements, pictures dans logements.js
    const name = dataAccomodation[0].host.name.split(' ');
    // split('espace') va permettre d'afficher en entier le prénom et le nom
    // en retirant split ou seulement l'espace entre guillemets, il n'y a que
    // la première lettre du prénom et du nom qui s'affiche.
    const rating = dataAccomodation[0].rating;
    const description  = dataAccomodation[0].description;
    const equipments = dataAccomodation[0].equipments;

    useEffect(() => {
        setImageCarousel(dataAccomodation[0].pictures);
    }, [idAccomodation]);

    return (
        <div>
            <Header />
            <Carousel imageCarousel={imageCarousel}/>
            <main className="accomodation">
                <div className="accomodation_content">
                    <div className="accomodation_content_infos">
                        <h1>{dataAccomodation[0].title}</h1>
                        <p>{dataAccomodation[0].location}</p>
                        <div>
                            {dataAccomodation[0].tags.map((tag, index) => {
                                return (
                                    <button key={index}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="accomodation_content_host">
                        <div>
                            <div className='accomodation_content_host_name'>
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataAccomodation[0].host.picture} alt="Hôte de l'hébergement" />
                        </div>
                        <div className="accomodation_content_host_stars">
                            {[...Array(5)].map((star, index) => {
                                // Mettre index + 1 à ratingBaseValue sinon il commence à 0, donc pour un
                                // rating = 3 enregistré dans logements.js:
                                // (+1 non ajouté) index(0) <= rating(3) => 0-1étoile, 1-2étoile, 2-3étoile, 3-4étoile
                                // il va afficher 4 étoile au lieu de 3.
                                const ratingBaseValue = index + 1;
                                return (
                                    <img key={index} src={ratingBaseValue <= rating ? redStar : greyStar} alt="étoile" />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Équipements'} content={equipments}/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Accomodation
