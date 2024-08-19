import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Select> = {
    title: 'UI/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
    args: {
    },
};