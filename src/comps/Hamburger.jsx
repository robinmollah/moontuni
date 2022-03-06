import React from 'react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiExit } from 'react-icons/bi';

const Hamburger = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<GiHamburgerMenu />}></MenuButton>
      <MenuList>
        <MenuItem icon={<BiExit />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;
