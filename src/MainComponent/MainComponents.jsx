
import React from 'react';
import DeliveryTerms from "../Leverans/Leverans.jsx";
import PurchaseTerms from "../Köpvilkor/köpvilkor.jsx";
import AboutUs from "../Ombutik/ombutik.jsx";
const MainComponent = () => {
    return (
        <div>
            <AboutUs/>
            <DeliveryTerms/>
            <PurchaseTerms/>

        </div>


    );
};

export default MainComponent;
