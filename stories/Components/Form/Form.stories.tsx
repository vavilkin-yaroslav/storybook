import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Form } from './Form';

export default {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export const Default: StoryObj<typeof Form> = {
  render: () => <Form />,
};
