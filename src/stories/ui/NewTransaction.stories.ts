import type { Meta, StoryObj } from '@storybook/react';
import NewTransaction from './NewTransaction';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NewTransaction> = {
    title: 'UI/NewTransaction',
    component: NewTransaction,
};

export default meta;
type Story = StoryObj<typeof NewTransaction>;

export const DefaultNewTransaction: Story = {
    args: {
    },
};