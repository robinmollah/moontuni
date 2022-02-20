import React from 'react';
import { Avatar, Box, Heading, Link, Stack } from '@chakra-ui/react';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <Stack flexDir="column" justifyContent="center" alignItems="center">
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome</Heading>
      <Box>
        <SignupForm />

        <Link marginTop={'1em'} float={'right'} href={'/'}>
          Home
        </Link>
      </Box>
    </Stack>
  );
};

export default Signup;
