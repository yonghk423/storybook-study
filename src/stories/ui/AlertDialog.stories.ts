import type { Meta, StoryObj } from '@storybook/react';
import AlertDialog from './AlertDialog';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AlertDialog> = {
    title: 'UI/AlertDialog',
    component: AlertDialog,
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const DefaultAlertDialog: Story = {
    args: {
    },
};