import './TermsInfo.css';
import React from 'react';

const PurchaseTerms = () => {
    return (
        <div className="term">
            <h6 className="term-heading">Välkommen till våra Köpvillkor</h6>
            <p className="term-intro">
                Utforska våra villkor för en smidig och trygg köpupplevelse. Här är vad du behöver veta:
            </p>

            <div className="term-section with-icon">
                <h3><img src="../../photos/oder-icon.jpeg" alt="" /> Beställning</h3>
                <p>
                    Du kan enkelt placera en beställning genom vår användarvänliga webbplats. Genom att göra en beställning godkänner du våra köpvillkor och förbinder dig att betala det totala beloppet för din beställning.
                </p>
            </div>

            <div className="term-section with-icon">
                <h3><img src="../../photos/payment-icon.png" alt="" /> Betalning</h3>
                <p>
                    Alla priser anges i lokal valuta och inkluderar skatter. Betalning kan göras med olika bekväma betalningsmetoder som anges vid kassan. Observera att vi förbehåller oss rätten att ändra priser och betalningsmetoder när som helst.
                </p>
            </div>

            <div className="term-section with-icon">
                <h3><img src="../../photos/return-icon.png" alt="Return Icon" /> Ångerrätt</h3>
                <p>
                    Vi förstår att behov kan förändras. Därför erbjuder vi dig rätten att ångra ditt köp inom 14 dagar från mottagandet av varorna. Kontakta vår dedikerade kundtjänst för att inleda returprocessen. Besök även vår returpolicy för ytterligare information.
                </p>
            </div>

            <div className="term-section with-icon">
                <h3><img src="../../photos/delivery-icon.png" alt="Delivery Icon" /> Leverans</h3>
                <p>
                    Leveransvaraktigheten och kostnaden varierar beroende på din leveransadress och valda leveransmetod. Utforska våra leveransvillkor för detaljerad information om hur vi ser till att dina produkter når dig säkert och snabbt.
                </p>
            </div>

            <div className="term-section with-icon">
                <h2><img src="../../photos/support-icon-55.png" alt="Support Icon" /> Kundtjänst</h2>
                <p>
                    Vår kundtjänst är här för att underlätta din köpupplevelse. Kontakta oss via e-post eller telefon för snabba och pålitliga svar på dina frågor. Ditt nöje är vår prioritet.
                </p>
            </div>
        </div>
    );
};

export default PurchaseTerms;







// const PurchaseTerms = () => {
//     return (
//         <div className= "term">
//             <h3>Köpvillkor</h3>
//
//             <p>Välkommen till våra köpvillkor. Nedan finner du information om hur köp och beställningar hanteras:</p>
//
//             <h5>1. Beställning</h5>
//             <p>Du kan placera en beställning genom vår webbplats. Genom att göra en beställning godkänner du våra köpvillkor och åtar dig att betala det totala beloppet för beställningen.</p>
//
//             <h5>2. Priser och Betalning</h5>
//             <p>Alla priser anges i lokal valuta och inkluderar skatter. Betalning kan göras med olika betalningsmetoder som anges vid kassan. Vi förbehåller oss rätten att ändra priser och betalningsmetoder när som helst.</p>
//
//             <h5>3. Ångerrätt</h5>
//             <p>Du har rätt att ångra ditt köp inom 14 dagar från mottagandet av varorna. Kontakta vår kundtjänst för att initiera returprocessen. Vänligen se våra returpolicy för ytterligare information.</p>
//
//             <h5>4. Leverans</h5>
//             <p>Varaktigheten och kostnaden för leverans kan variera beroende på leveransadress och vald leveransmetod. Se våra leveransvillkor för detaljerad information.</p>
//
//             <h5>5. Kundtjänst</h5>
//             <p>Vår kundtjänst står till ditt förfogande för att besvara frågor eller ge hjälp. Kontakta oss via e-post eller telefon för snabbast möjliga svar.</p>
//         </div>
//     );
// };
//
// export default PurchaseTerms;
