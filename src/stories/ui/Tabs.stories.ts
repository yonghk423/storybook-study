import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Tabs> = {
    title: 'UI/Tabs',
    component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const DefaultAccordion: Story = {
    args: {
    },
};