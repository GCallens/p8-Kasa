import './carousel.scss'
import {useState} from "react";
import ArrowRight from '../../assets/arrow_carousel_right.png'
import ArrowLeft from '../../assets/arrow_carousel_left.png'

function Carousel({imageCarousel}) {

    const [index, setIndex] = useState(0)

    const goNext = () => {
        setIndex(index + 1)
        if (index === imageCarousel.length - 1)
            setIndex(0)
    }

    /* CREATION DE LA FLECHE DE GAUCHE */
    const goBack = () => {
        setIndex(index - 1)
        if (index === 0)
            setIndex(imageCarousel.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageCarousel[index]})`}} className='carousel'>
            {imageCarousel.length > 1 &&
                <>
                    <img
                        className='carousel_arrow carousel_arrow_right'
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={goNext}
                    />
                    <img
                        className='carousel_arrow carousel_arrow_left'
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={goBack}
                    />
                    <p className='slideCount'>{index + 1} / {imageCarousel.length}</p>
                </>
            }
        </section>
    )
}

export default Carousel
