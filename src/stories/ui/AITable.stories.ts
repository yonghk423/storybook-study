import type { Meta, StoryObj } from '@storybook/react';
import AITable from './AITable';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AITable> = {
    title: 'UI/AITable',
    component: AITable,
};

export default meta;
type Story = StoryObj<typeof AITable>;

export const DefaultSwitch: Story = {
    args: {
    },
};