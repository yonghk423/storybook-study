import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Table> = {
    title: 'UI/Table',
    component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const DefaultTable: Story = {
    args: {

    },
};