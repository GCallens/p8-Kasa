import './collapse.scss'
import arrow from '../../assets/arrow.png'
import { useState } from "react";

function Collapse({title, content}) {

    // Déclaration de la variable d'état, toggle est la donnée, setToggle est la variable
    // qui va permettre de modifier cette donnée
    const [toggle, setToggle] = useState(false);

    return (
        <div className="collapse" >
            <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                {title}
                <img
                    className={toggle ? 'arrow arrow_down' : 'arrow arrow_up'}
                    src={arrow}
                    alt="show content"
                />
            </h3>
            <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                }) : content
                }
            </div>
        </div>
    )
}

export default Collapse
