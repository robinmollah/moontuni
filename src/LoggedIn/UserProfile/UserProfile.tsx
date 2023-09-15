import React from 'react';
import {Divider, Flex, Image, Text} from "@chakra-ui/react";
import {useRecoilValue} from "recoil";
import {profileAtom} from "../../state/atoms";

const UserProfile = () => {
    const profile = useRecoilValue(profileAtom);

    return (
        <Flex alignItems={"center"} justifyContent={"center"} direction={"column"}>
            <Text fontSize={"xl"} fontWeight={"bold"} marginY={"1em"}>Profile</Text>
            <Image
                borderRadius={"full"}
                boxSize={"150px"}
                src={profile.dp_url}
                alt={"Profile picture"}
            />
            <Text fontSize={"lg"} fontWeight={"semibold"} marginY={"1em"}>{profile.name}</Text>
            <Divider/>
        </Flex>
    );

}

export default UserProfile;