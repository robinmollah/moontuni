import React from 'react';
import { useRecoilValue } from 'recoil';
import { contactsAtoms } from '../state/contacts/atoms';
import { Avatar, AvatarBadge, Badge, Table, Tbody, Td, Tr } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useRecoilValue(contactsAtoms);
  return (
    <div>
      <Table variant="simple">
        <Tbody>
          {contacts.map((contact) => {
            return (
              <Tr key={contact.id}>
                <Td width={'15%'}>
                  <Avatar>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                </Td>
                <Td width={'70%'} align={'left'} paddingLeft={'0px'}>
                  <b>{contact.name}</b>
                  {contact.id < 2 && (
                    <Badge ml="1" colorScheme="red">
                      New
                    </Badge>
                  )}
                  <br />
                  {contact.email}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default ContactList;
