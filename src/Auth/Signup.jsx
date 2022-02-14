import React from 'react';
import { Avatar, Box, Button, Heading, Stack } from '@chakra-ui/react';
import LoginUsingEmailPassword from './Login/LoginUsingEmailPassword';

const Signup = () => {
  return (
    <Stack flexDir="column" justifyContent="center" alignItems="center">
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome</Heading>
      <Box>
        <SignupForm />
        <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
          Sign up
        </Button>
      </Box>
    </Stack>
  );
};

export default Signup;
