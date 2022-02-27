import React from 'react';
import { Button, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import { firebaseSetUsername } from '../firebase-app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IUserProfile, profileAtom } from '../state/atoms';

const AskName = () => {
  const currentName = useRecoilValue<IUserProfile>(profileAtom).name;
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [name, setName] = React.useState('');
  const toast = useToast();

  const setDisplayName = () => {
    firebaseSetUsername(name)
      .then((d) => {
        toast({
          title: d,
        });
        setProfile({ ...profile, name: name });
        window.location.reload();
      })
      .catch((e) => {
        toast({
          status: 'error',
          title: 'Failed to update user name',
          description: 'Failed ' + e.message,
        });
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
