import {atom} from "recoil";

export const conversationList = atom({
    key: 'conversation_list',
    default: [],
});