import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ChatList from './ChatList';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import ContactList from './ContactList';

const TabContainer = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList>
        <Tab>
          <BiEnvelopeOpen size={'2em'} />
        </Tab>
        <Tab>
          <BsPeople size={'2em'} />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ChatList />
        </TabPanel>
        <TabPanel>
          <ContactList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabContainer;
