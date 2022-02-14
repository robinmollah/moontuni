import React, { useState } from 'react';
import { Flex, Heading, Button, Stack, Box, Link, Avatar } from '@chakra-ui/react';
import LoginUsingEmailPassword from './Login/LoginUsingEmailPassword';
import LoginUsingOtp from './Login/LoginUsingOtp';

const Login = () => {
  return (
    <Flex flexDirection="column" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
      <Stack flexDir="column" justifyContent="center" alignItems="center">
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box>
          <LoginUsingEmailPassword />
          <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
            Login
          </Button>
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
