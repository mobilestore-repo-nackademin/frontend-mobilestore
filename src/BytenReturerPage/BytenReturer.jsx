import React from "react";
import "./BytenReturer.css"

const BytenReturer = () => {
  return (
      <div className="container">
        <div className="BytenReturer">
          <h1 className="h1-pages">Reklamation och Retur</h1>
           <img className="img1" src="../../photos/information.png" alt="Reklamation och Retur" />

          <div className="content">
            <div className="text">
              <h3>Reklamation</h3>
              <p>Vi beklagar om du har några problem med ditt köp. Nedan finns information om hur du kan reklamera eller returnera produkter.</p>

              <p>Om du upptäcker att din produkt är defekt eller har några andra problem, vänligen kontakta vår kundtjänst så snart som möjligt på MobileShopSupport@hotmail.com.</p>
              <p>För att underlätta processen, vänligen inkludera följande information:</p>
              <ul>
                <li>Namn</li>
                <li>Ordernummer</li>
                <li>Beskrivning av problemet</li>
              </ul>
              <p>Vi kommer att göra vårt bästa för att lösa problemet så snabbt som möjligt.</p>

              <h3>Retur</h3>
              <p>Om du vill returnera en produkt av andra skäl, vänligen kontakta oss på MobileShopSupport@hotmail.com för returinstruktioner.</p>
              <p>För att vara berättigad till retur, måste produkten vara oanvänd och i samma skick som du mottog den. Returfrakten kan vara kundens ansvar beroende på orsaken till returen.</p>
              <p>Vi kommer att behandla returärendet så snart vi har mottagit och granskat produkten.</p>
            </div>


          </div>
        </div>
      </div>
  );
};

export default BytenReturer;
