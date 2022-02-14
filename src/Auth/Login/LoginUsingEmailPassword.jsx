import React, { useState } from 'react';
import {
  Button,
  chakra,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  useToast,
} from '@chakra-ui/react';

import { FaUserAlt, FaLock } from 'react-icons/fa';
import { firebaseAuth } from '../../firebase-app';
import { signInWithEmailAndPassword } from 'firebase/auth';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginUsingEmailPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleShowClick = () => setShowPassword(!showPassword);
  const toast = useToast();

  const onLogin = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('Logged in', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          title: 'Error',
          description: errorMessage,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <form>
        <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="lg">
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CFaUserAlt color="gray.300" />
              </InputLeftElement>
              <Input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.300">
                <CFaLock color="gray.300" />
              </InputLeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText textAlign="right">
              <Link>forgot password?</Link>
            </FormHelperText>
          </FormControl>
        </Stack>
        <Button borderRadius={0} variant="solid" colorScheme="teal" width="full" onClick={onLogin}>
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginUsingEmailPassword;
