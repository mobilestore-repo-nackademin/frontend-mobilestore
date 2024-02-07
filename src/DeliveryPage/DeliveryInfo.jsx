import React from 'react';

import './DeliveryInfo.css';


const DeliveryTerms = () => {
    return (
        <div className="deliver">


            <div className="delivery-info">
                <h5>1. Leveranstid</h5>
                <p>Vi strävar efter att leverera dina produkter så snabbt som möjligt. Leveranstiden kan variera beroende på din plats och produktens tillgänglighet. Kontakta vår kundtjänst för specifik information om leveranstiden för din beställning.</p>
            </div>

            <div className="delivery-info">
                <h5>2. Fraktkostnad</h5>
                <p>Fraktkostnader kan tillkomma och varierar beroende på leveransadress och valt fraktsätt. Du kommer att informeras om fraktkostnaderna i kassan innan du slutför din beställning.</p>
            </div>

            <div className="delivery-info">
                <h5>3. Leveransmetoder</h5>
                <p>Vi erbjuder olika leveransmetoder för att möta dina behov. Välj den som passar dig bäst vid kassan.</p>
            </div>

            <div className="delivery-info">
                <h5>4. Följ din beställning</h5>
                <p>Efter att din beställning har skickats kommer du att få en bekräftelse via e-post med en länk för att följa din beställning online.</p>
            </div>


            <div className="delivery-info">
                <h5>5. Kundtjänst</h5>
                <p>Om du har frågor om leveransen eller vill ha mer information, vänligen kontakta vår kundtjänst.</p>
            </div>
            <div>
                <img className= 'delivery-photo' src="./photos/leveransbil.png" alt=""/>
            </div>

        </div>
    );
};

export default DeliveryTerms;


