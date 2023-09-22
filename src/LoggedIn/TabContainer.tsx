import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ChatList from './ChatList';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import ContactList from './ContactList';
import {CgProfile} from "react-icons/cg";
import UserProfile from "./UserProfile/UserProfile";
import FloatingActionBar from "../comps/FloatingActionBar";
import {useSetRecoilState} from "recoil";
import {activeTabAtom} from "../state/atoms";

const TabContainer = () => {
  const setActiveTabIndex = useSetRecoilState(activeTabAtom);

  return (
    <Box height={'100vh'}>
      <Tabs onChange={(index) => setActiveTabIndex(index)} isFitted variant="enclosed" defaultIndex={1}>
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
      <FloatingActionBar/>
    </Box>
  );
};

export default TabContainer;
