import React from 'react';
import { FormControl, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa';

const LoginUsingOtp = () => {
  return (
    <form>
      <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="lg">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaPhone color="gray.300" />
            </InputLeftElement>
            <Input type="phone" placeholder="017xxx xxxxxxx" />
          </InputGroup>
        </FormControl>
      </Stack>
    </form>
  );
};

export default LoginUsingOtp;
