import React from 'react';
import "./FAQ.css";


const FAQ = () => {
  return (
    <div className="faq-list">
      <div className="faq-card">
        <h3>Hur gör jag en beställning?</h3>
        <p>
          Besök vår webbplats, bläddra igenom produkterna och lägg till önskade varor i din kundvagn. Gå sedan till kassan och slutför din beställning genom att följa instruktionerna.
        </p>
      </div>

      <div className="faq-card">
        <h3>Hur kan jag följa min beställning?</h3>
        <p>
          Efter att din beställning har skickats kommer du att få ett bekräftelse-e-postmeddelande med spårningsinformation. Du kan använda den här informationen för att följa din beställning.
        </p>
      </div>

      <div className="faq-card">
        <h3>Hur lång tid tar det innan jag får min beställning?</h3>
        <p>
          Leveranstiden varierar beroende på din plats. Vanligtvis tar det [ange tid] arbetsdagar. Mer information finns på vår sida för leveransinformation.
        </p>
      </div>

      <div className="faq-card">
        <h3>Kan jag ändra min leveransadress efter att jag har lagt min beställning?</h3>
        <p>
          Tyvärr kan vi inte ändra leveransadressen efter att beställningen har slutförts. Kontrollera noga att din adress är korrekt innan du slutför din beställning.
        </p>
      </div>

      <div className="faq-card">
        <h3>Vad händer om jag får en defekt produkt?</h3>
        <p>
          Om du får en defekt produkt, vänligen kontakta vår kundtjänst inom [ange antal dagar] dagar efter mottagandet. Vi kommer att hjälpa dig med en retur och ersättning.
        </p>
      </div>

      <div className="faq-card">
        <h3>Har era telefoner garanti?</h3>
        <p>
          Ja, alla våra telefoner levereras med en standardgaranti. Kontrollera produktens specifika garantiinformation på produktsidan eller kontakta oss för mer detaljerad information.
        </p>
      </div>

      <div className="faq-card">
        <h3>Vilka betalningsmetoder accepterar ni?</h3>
        <p>
          Vi accepterar kreditkort, banköverföringar och andra vanliga betalningsmetoder. Alla betalningar sker genom en säker och krypterad anslutning.
        </p>
      </div>

      <div className="faq-card">
        <h3>Kan jag returnera en produkt och få återbetalning?</h3>
        <p>
          Ja, du kan returnera produkter inom [12] dagar efter mottagandet för återbetalning. Vänligen se vår returpolicy för detaljer och hur du kan starta en retur.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
