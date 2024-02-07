import React from 'react';
import './DeliveryInfo.css';

const DeliveryTerms = () => {
    return (
        <div className="deliver">
            <div className='header'>
                <h1>Delivery Information</h1>
            </div>

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
                <p>Välkommen till den coolaste mobilupplevelsen någonsin! Vårt gäng på kundservice är som den bästa backstage-passet till din mobilvärld, redo att rocka din vardag och fixa alla dina mobila äventyr.

När du ringer in till oss, är det som att slå tonerna till din favoritlåt. Våra kundtjänsthjältar är inte bara tekniknördar, de är också partyplanerare för din digitala fest! Inga frågor är för stora eller för små – vi är här för att göra tekniken lika smidig som din favoritmelodi.

Vi är som din personliga roadie, redo att justera ljudet och se till att din mobilupplevelse är klockren. Och om du någonsin känner dig "tech-trapped," tveka inte att kontakta oss. Vi är här för att rädda dagen och få dig att känna dig som den rockstjärna du är!

Så slå oss en signal, skicka ett meddelande eller joina vår mobila fiesta online – vår kundservice är redo att sätta stilen på din mobilvärld. Let's keep the mobile vibes strong! 📱🎸</p>
            </div>

            <div>
                <img className='delivery-photo' src="./photos/leveransbil.png" alt="" />
            </div>
        </div>
    );
};

export default DeliveryTerms;
