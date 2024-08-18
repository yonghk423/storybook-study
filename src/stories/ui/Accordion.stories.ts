import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Accordion> = {
    title: 'UI/Accordion',
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const DefaultAccordion: Story = {
    args: {
        mockData: Accordion,
    },
};