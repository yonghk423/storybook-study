import type { Meta, StoryObj } from '@storybook/react';
import SidePanel from './SidePanel';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SidePanel> = {
    title: 'UI/SidePanel',
    component: SidePanel,
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const DefaultSidePanel: Story = {
    args: {
    },
};

