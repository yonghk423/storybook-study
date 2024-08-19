import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Tooltip> = {
    title: 'UI/Tooltip',
    component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const DefaultTooltip: Story = {
    args: {
    },
};