import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => <Form />,
};
