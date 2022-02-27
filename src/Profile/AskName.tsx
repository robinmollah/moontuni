import React from 'react';
import { Button, Heading, Input, Stack } from '@chakra-ui/react';
import { firebaseAuth } from '../firebase-app';
import { useRecoilValue } from 'recoil';
import { IUserProfile, profileAtom } from '../state/atoms';

const AskName = () => {
  const user = firebaseAuth.currentUser as any;
  const currentName = useRecoilValue<IUserProfile>(profileAtom).name;
  const [name, setName] = React.useState('');

  const setDisplayName = () => {
    user
      .updateProfile({
        displayName: name,
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      })
      .then(() => {
        console.log('User updated');
      })
      .catch((error: any) => {
        console.error('Failed to update name', error);
      });
  };

  return (
    <Stack align={'center'}>
      <Heading>Please type your name to continue</Heading>
      <Input
        type={'text'}
        placeholder={currentName || 'Type your name'}
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
      />
      <Button onClick={setDisplayName}>Submit</Button>
    </Stack>
  );
};

AskName.propTypes = {};

export default AskName;
