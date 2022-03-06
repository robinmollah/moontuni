import React from 'react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { GiHamburgerMenu, GiMute } from 'react-icons/gi';
import { BiExit, BiLock } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';

const Hamburger = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<GiHamburgerMenu />}></MenuButton>
      <MenuList>
        <MenuItem icon={<FiDelete />}>Delete</MenuItem>
        <MenuItem icon={<BiLock />}>Block</MenuItem>
        <MenuItem icon={<GiMute />}>Mute</MenuItem>
        <MenuItem icon={<BiExit />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;
