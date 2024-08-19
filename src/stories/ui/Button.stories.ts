import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
    args: {

    },
};