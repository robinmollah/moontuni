import React from 'react';
import {IconButton} from "@chakra-ui/react";
import {GrAdd, GrEdit} from "react-icons/gr";
import {useRecoilValue} from "recoil";
import {activeTabAtom} from "../state/atoms";

const FloatingActionBar = ({}) => {
    const activeTabIndex = useRecoilValue(activeTabAtom)
    let icon = <GrAdd/>;
    if (activeTabIndex === 0) {
        icon = <GrEdit/>
    }

    return (
        <IconButton
            boxShadow={'teal 4px 5px 8px'}
            borderRadius={'50%'}
            colorScheme="teal"
            aria-label="Add"
            size="lg"
            position={'absolute'}
            bottom={'4em'}
            right={'1em'}
            icon={icon}
        />
    );
}

export default FloatingActionBar;