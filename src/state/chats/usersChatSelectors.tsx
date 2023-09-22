import {RecoilValueReadOnly, selector} from 'recoil';
import { DEBUG } from '../../App';
import { IConversation } from '../atoms';
import {firebaseDatabase} from "../../firebase-app";
import {ref, child, get as firebaseGet} from "firebase/database";
import {fake_chat_list} from "../../fakedata";
import {firebaseUserSelector} from "../selectors";
import {userProfileQuery} from "../contacts/selectors";
import {IContact} from "../contacts/atoms";

export const usersChats: RecoilValueReadOnly<IConversation[]> = selector<IConversation[]>({
  key: 'usersChats',
  get: async ({get}) => {
    if (DEBUG){
      return fake_chat_list;
    } else {
      const snapshot = await firebaseGet(child(ref(firebaseDatabase), 'conversations/' + get(firebaseUserSelector).uid));
      if (snapshot.exists()) {
        const conversationListSnapshot = snapshot.val();
        const conversationList : IConversation[] = [];
        for (const uid in conversationListSnapshot) {
          const contact: IContact = get(userProfileQuery(uid));
          const conversation: IConversation = {
              participants: contact,
              messages: conversationListSnapshot[uid].messages,
              last_message: conversationListSnapshot[uid].last_message.message,
              last_msg_time: conversationListSnapshot[uid].last_message.time,
              last_msg_sender: conversationListSnapshot[uid].last_message.sender,
          }
          conversationList.push(conversation);
        }
        return conversationList;
      } else {
        return []
      }
    }
  },
});

export const getConversation = selector<IConversation>({
  key: 'getConversation',
  get: ({}) => {
    return {
      participants: [],
      messages: [],
      last_message: null,
      last_msg_time: new Date(),
    };
  },
});
