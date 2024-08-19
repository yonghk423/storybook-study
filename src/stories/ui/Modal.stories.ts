import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
    args: {
    },
};