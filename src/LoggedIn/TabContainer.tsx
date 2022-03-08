import React from 'react';
import { Box, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ChatList from './ChatList';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import ContactList from './ContactList';
import { GrAdd } from 'react-icons/gr';

const TabContainer = () => {
  return (
    <Box height={'100vh'}>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>
            <BiEnvelopeOpen size={'2em'} />
          </Tab>
          <Tab>
            <BsPeople size={'2em'} />
          </Tab>
        </TabList>
        <TabPanels padding={'0px'}>
          <TabPanel>
            <ChatList />
          </TabPanel>
          <TabPanel>
            <ContactList />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <IconButton
        boxShadow={'teal 4px 5px 8px'}
        borderRadius={'50%'}
        colorScheme="teal"
        aria-label="Add"
        size="lg"
        position={'absolute'}
        bottom={'1em'}
        right={'1em'}
        icon={<GrAdd />}
      />
    </Box>
  );
};

export default TabContainer;
