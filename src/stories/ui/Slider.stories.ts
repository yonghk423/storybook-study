import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Slider> = {
    title: 'UI/Slider',
    component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const DefaultSlider: Story = {
    args: {
    },
};