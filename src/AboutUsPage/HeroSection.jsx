
import React from 'react';
import AboutUsCss from './AboutUsCss/AboutUs.css'


const AboutUsPage = () => {
    return (
        <div>
            <h2>Om Oss</h2>
            <img className='Heroimgaboutus' src="../../photos/mobilstore.jpeg" alt="" />
            <img className='Heroimgaboutus2' src="../../photos/Mobilstore.2.jpeg" alt="" />
            <img className='Heroimgaboutus3' src="../../photos/Mobilstore.3.jpeg" alt="" />
            <div className="hero">

            <p>
                Välkommen till vår webbplats! Vi är ett fantastiskt team som strävar efter att erbjuda högkvalitativa produkter och en bra köpupplevelse för våra kunder.
            </p>
                <div className="hero1">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>

            </div>
        </div>

    );
};


export default AboutUsPage;
