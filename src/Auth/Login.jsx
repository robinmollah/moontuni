import React from 'react';
import { Flex, Heading, Stack, Box, Link, Avatar } from '@chakra-ui/react';
import LoginUsingEmailPassword from './Login/LoginUsingEmailPassword';

const Login = () => {
  return (
    <Flex flexDirection="column" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
      <Stack flexDir="column" justifyContent="center" alignItems="center">
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome to Moontuni</Heading>
        <Box>
          <LoginUsingEmailPassword />
        </Box>
      </Stack>
      <Box marginTop={'0.5em'}>
        New to us?{' '}
        <Link color="teal.500" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
