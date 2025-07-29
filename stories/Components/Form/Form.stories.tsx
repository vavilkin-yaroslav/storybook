import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Form } from './Form';

export default {
  title: 'Complex/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Form>;

export const Default: StoryObj<typeof Form> = {
  render: () => <Form />,
};
