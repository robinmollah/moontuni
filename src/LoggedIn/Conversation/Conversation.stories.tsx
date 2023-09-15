import type {Meta, StoryObj} from '@storybook/react';

import Conversation from './Conversation';
import {IMessage} from "../../state/atoms";
import {withRecoilFlow} from "storybook-addon-recoil-flow/dist/decorator";
import {RecoilRoot} from "recoil";
import React, {Suspense} from "react";
import {MemoryRouter} from "react-router-dom";
import {Button} from "@chakra-ui/react";

const meta: Meta<typeof Conversation> = {
    title: 'LoggedIn/Conversation',
    component: Conversation,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        withRecoilFlow,
        (storyFn) => (
            <RecoilRoot>
                <MemoryRouter>
                    <Suspense fallback={<Button value={"click"}/>}>
                        {storyFn()}
                    </Suspense>
                </MemoryRouter>
            </RecoilRoot>
        )
    ]
}


export default meta;

type Story = StoryObj<typeof Conversation>;

export const Primary: Story = {
    args: {
        messages: [
            {text: 'Hi', sender: '1', date: Date.now()} as IMessage,
        ],
        addMessage: () => {
            console.log("Hello world");
        },
    }
} as Story;