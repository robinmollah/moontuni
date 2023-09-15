import React from 'react';
import { Box, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ChatList from './ChatList';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import ContactList from './ContactList';
import { GrAdd } from 'react-icons/gr';
import {CgProfile} from "react-icons/cg";
import UserProfile from "./UserProfile/UserProfile";

const TabContainer = () => {
  return (
    <Box height={'100vh'}>
      <Tabs isFitted variant="enclosed">
        <TabPanels padding={'0px'}>
          <TabPanel>
            <UserProfile />
          </TabPanel>
          <TabPanel>
            <ChatList />
          </TabPanel>
          <TabPanel>
            <ContactList />
          </TabPanel>
        </TabPanels>
        <TabList position={"absolute"} bottom={"0px"} width={"100%"}>
          <Tab>
            <CgProfile size={'2em'} />
          </Tab>
          <Tab>
            <BiEnvelopeOpen size={'2em'} />
          </Tab>
          <Tab>
            <BsPeople size={'2em'} />
          </Tab>
        </TabList>
      </Tabs>
      <IconButton
        boxShadow={'teal 4px 5px 8px'}
        borderRadius={'50%'}
        colorScheme="teal"
        aria-label="Add"
        size="lg"
        position={'absolute'}
        bottom={'4em'}
        right={'1em'}
        icon={<GrAdd />}
      />
    </Box>
  );
};

export default TabContainer;
