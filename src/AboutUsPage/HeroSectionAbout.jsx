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
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
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
