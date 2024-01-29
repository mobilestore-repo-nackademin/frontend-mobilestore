import React from 'react';
import './AboutUsCss/AboutUs.css'
import { Link } from 'react-router-dom';


const AboutUsPage = () => {
    return (
        <div className='bol'>
            <h2>Om Oss</h2>
            <div className='button-div-about'>
                <Link to="/"><button>Gå till Huvudsidan</button></Link>
                 <Link to="/Phones"><button>Gå till Produktssidan</button></Link>

            </div>
            <div className='img-div-about'>
            <img className='Heroimgaboutus' src="../../photos/mobilstore.jpeg" alt="" />
            <img className='Heroimgaboutus2' src="../../photos/Mobilstore.2.jpeg" alt="" />
            <img className='Heroimgaboutus3' src="../../photos/Mobilstore.3.jpeg" alt="" />
            </div>
            <div className="heroAbout">
                <div className="hero1">
                    <p>Välkommen till vår butik! Vi är dedikerade till att erbjuda högkvalitativa produkter och en fantastisk köpupplevelse.</p>
                    <p>Vi strävar efter att erbjuda våra kunder de senaste och mest innovativa produkterna. Vår passion för kvalitet och service driver oss att söka det bästa för våra kunder.</p>
                    <p>Om du har frågor eller behöver hjälp, tveka inte att kontakta vår kundtjänst. Vi finns här för att göra din shoppingupplevelse så smidig som möjligt.</p>
                    <p>Tack för att du väljer oss som din shoppingdestination!</p>

                </div>
            </div>
        </div>
    );
};


export default AboutUsPage;
