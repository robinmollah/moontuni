import React from 'react';
import {Divider, Flex, Image, Text} from "@chakra-ui/react";
import {useRecoilValue} from "recoil";
import {firebaseUserSelector} from "../../state/selectors";
import {IUserProfile} from "../../state/atoms";

const UserProfile = () => {
    const profile : IUserProfile =  useRecoilValue(firebaseUserSelector);

    return (
        <Flex alignItems={"center"} justifyContent={"center"} direction={"column"}>
            <Text fontSize={"xl"} fontWeight={"bold"} marginY={"1em"}>Profile</Text>
            <Image
                borderRadius={"full"}
                boxSize={"150px"}
                fit={"cover"}
                src={profile.photoURL + "?alt=media"}
                alt={"Profile picture"}
            />
            <Text fontSize={"lg"} fontWeight={"semibold"} marginY={"1em"}>{profile.displayName}</Text>
            <Divider/>
            <Text fontSize={"sm"}>{profile.uid}</Text>
        </Flex>
    );

}

export default UserProfile;