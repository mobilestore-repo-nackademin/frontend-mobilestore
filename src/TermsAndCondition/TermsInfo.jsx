import './TermsInfo.css';
import React from 'react';

const PurchaseTerms = () => {
    return (
        <div className="term">
            <h6 className="term-heading">Välkommen till våra Köpvillkor!</h6>
            <div className="term-section with-icon">
                <h3><img src="../../photos/ship.png" alt="" /> Beställning</h3>
                <p>
                    Du kan enkelt placera en beställning genom vår användarvänliga webbplats. Genom att göra en beställning godkänner du våra köpvillkor och förbinder dig att betala det totala beloppet för din beställning.
                </p>
            </div>

            <div className="term-section with-icon">
                <h3><img src="../../photos/online-payment.png" alt="" /> Betalning</h3>
                <p>
                    Alla priser anges i lokal valuta och inkluderar skatter. Betalning kan göras med olika bekväma betalningsmetoder som anges vid kassan. Observera att vi förbehåller oss rätten att ändra priser och betalningsmetoder när som helst.
                </p>
            </div>

            <div className="term-section with-icon">
                <h3><img src="../../photos/two-arrows.png" alt="Return Icon" /> Ångerrätt</h3>
                <p>
                    Vi förstår att behov kan förändras. Därför erbjuder vi dig rätten att ångra ditt köp inom 14 dagar från mottagandet av varorna. Kontakta vår dedikerade kundtjänst för att inleda returprocessen. Besök även vår returpolicy för ytterligare information.
                </p>
            </div>

            <div className="term-section with-icon">
                <h3><img src="../../photos/shipped.png" alt="Delivery Icon" /> Leverans</h3>
                <p>
                    Leveransvaraktigheten och kostnaden varierar beroende på din leveransadress och valda leveransmetod. Utforska våra leveransvillkor för detaljerad information om hur vi ser till att dina produkter når dig säkert och snabbt.
                </p>
            </div>

            <div className="term-section with-icon">
                <h2><img src="../../photos/support.png" alt="Support Icon" /> Kundtjänst</h2>
                <p>
                    Vår kundtjänst är här för att underlätta din köpupplevelse. Kontakta oss via e-post eller telefon för snabba och pålitliga svar på dina frågor. Ditt nöje är vår prioritet.
                </p>
            </div>
        </div>
    );
};

export default PurchaseTerms;








