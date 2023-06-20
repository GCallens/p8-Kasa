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

    const [imageCarousel, setImageCarousel] = useState([])

    const idAccomodation = useParams('id').id;
    const dataAccomodation = datas.filter(data => data.id === idAccomodation);

    const name = dataAccomodation[0].host.name.split(' ');
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
            <main>
                <div>
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
                            <img src={dataAccomodation[0].host.picture} alt="host of this accomodation" />
                        </div>

                        <div className="accomodation_content_host_stars">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Accomodation
