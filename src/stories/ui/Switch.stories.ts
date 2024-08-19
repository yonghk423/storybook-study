import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Switch> = {
    title: 'UI/Switch',
    component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
    args: {
    },
};