import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChosePayment from './ChosePayment';
import ChoseDelivery from './ChoseDelivery';
import HomeDelivery from './HomeDelivery';
import InvoicePayment from './InvoicePayment';
import CardPayment from './CardPayment';

const MyTabsComponent = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  const handleTabCompletion = (index) => {
    setActiveTab(index + 1);
  };

  return (
    <div className='container'>
    <div className="tabs-container">
    <Tabs onSelect={handleTabSelect} selectedIndex={activeTab}>
      <TabList>
        <Tab> Leverans </Tab>
        <Tab>Hemleverans</Tab>
        <Tab>Välj betalning</Tab>
        <Tab>Fakturabetalning</Tab>
        <Tab>Kortbetalning</Tab>
      </TabList>

      <TabPanel>
        <ChoseDelivery onTabCompletion={handleTabCompletion} />
      </TabPanel>
      <TabPanel>
        <HomeDelivery onTabCompletion={handleTabCompletion}/>
      </TabPanel>
      <TabPanel>
        <ChosePayment onTabCompletion={handleTabCompletion} />
      </TabPanel>
      <TabPanel>
        <InvoicePayment onTabCompletion={handleTabCompletion}/>
      </TabPanel>
      <TabPanel>
        <CardPayment onTabCompletion={handleTabCompletion}/>
      </TabPanel>
    </Tabs>
    </div></div>
  );
};

export default MyTabsComponent;
