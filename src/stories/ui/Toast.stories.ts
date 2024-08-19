import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Toast> = {
    title: 'UI/Toast',
    component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const DefaultToast: Story = {
    args: {
    },
};