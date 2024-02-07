import React from 'react';
import './AboutUsCss/AboutUs.css';
import SocialIcons from "./SocialIcons.jsx";
const AboutUsPage = () => {
    return (
        <div className='AboutUsContainer'>
            <div className="heroAbout">
                <h2 className="aboutheros">Om Oss</h2>
                <div className="heroAboutGrid">
                    <div className="heroAboutBox">
                        <p>
                            Vår resa började med en vision och ett mål. Vi grundade vårt företag med ambitionen att skapa förändring och erbjuda en unik lösning på ett specifikt behov eller problem.
                            Genom att identifiera en möjlighet på marknaden och med en passion för att leverera kvalitet och innovation, tog vi steget att starta vårt företag.
                        </p>
                    </div>
                    <div className="heroAboutBox">
                        <p>
                            Vi erbjuder en mångfald av högkvalitativa mobiltelefoner och smarta tillbehör för att tillgodose olika behov och preferenser.
                        </p>
                    </div>
                    <div className="heroAboutBox">
                        <p>
                            Vårt motto är att erbjuda kvalitetsprodukter och enastående service för att göra våra kunders mobilupplevelse enkel, tillfredsställande och minnesvärd.

                        </p>
                    </div>
                    <div className="heroAboutBox">
                        <p>
                            Välkommen till oss, din exklusiva destination för en förstklassig mobilupplevelse.
                            Med fokus på högkvalitativa produkter och enastående service strävar vi efter att göra varje kunds mobilresa smidig, tillfredsställande och minnesvärd.
                            Upptäck vårt sortiment idag och låt oss vara din pålitliga partner i mobilteknologi
                        </p>
                    </div>
                </div><SocialIcons/>
            </div>

        </div>
    );
};

export default AboutUsPage;



