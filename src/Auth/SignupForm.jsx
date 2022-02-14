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
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import validator from 'validator';
import { firebaseApp, firebaseAuth } from '../firebase-app';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [invalidText, setInvalidText] = useState('');
  const toast = useToast();
  console.log('Firebase auth', firebaseAuth);

  const handleShowClick = () => setShowPassword(!showPassword);

  const onSignup = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        window.location.href = '/';
      })
      .catch((error) => {
        toast({
          title: 'Failed to create an account for you.',
          description: 'Error: ' + error.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  };

  let onChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.length <= 6) {
      setIsValidPassword(false);
      setInvalidText('Password must be at least 6 characters long.');
    } else {
      setIsValidPassword(true);
      setInvalidText('');
    }
  };

  let onRetypePassword = (e) => {
    if (password != e.target.value) {
      setIsValidPassword(false);
      console.log(password, e.target.value);
      setInvalidText('Passwords do not match.');
    } else {
      setIsValidPassword(true);
      setInvalidText('');
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form>
      <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="lg">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CFaUserAlt color="gray.300" />
            </InputLeftElement>
            <Input
              isInvalid={email && !validator.isEmail(email)}
              type="email"
              placeholder="Email address"
              onChange={onEmailChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <CFaLock color="gray.300" />
            </InputLeftElement>
            <Input
              isInvalid={!isValidPassword}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={onChangePassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300">
              <CFaLock color="gray.300" />
            </InputLeftElement>
            <Input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" onChange={onRetypePassword} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
      <Text>{invalidText}</Text>
      <Button
        disabled={!(isValidPassword && email && validator.isEmail(email))}
        borderRadius={0}
        variant="solid"
        colorScheme="teal"
        width="full"
        onClick={onSignup}
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignupForm;
