import { atom } from 'recoil';

interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export const contactsAtoms = atom<IContact[]>({
  key: 'contactsAtoms',
  default: [
    {
      id: 1,
      name: 'Robin Molla',
      email: '',
      phone: '',
      avatar: '',
    },
    {
      id: 2,
      name: 'Susmita Moon',
      email: '',
      phone: '',
      avatar: '',
    },
    {
      id: 0,
      name: 'Jacky Chan',
      email: '',
      phone: '',
      avatar: '',
    },
    {
      id: 4,
      name: 'Apuni',
      email: '',
      phone: '',
      avatar: '',
    },
  ],
});
