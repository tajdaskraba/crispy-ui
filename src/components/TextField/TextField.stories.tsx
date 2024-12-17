import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';
import './TextField.scss';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    variant: {
      control: 'select', 
      options: ['primary', 'secondary', 'error'],
      description: 'Visual style variant of the text field',
    },
    validationError: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when input value changes',
    },
    onEnterPress: {
      action: 'enter pressed',
      description: 'Callback fired when Enter key is pressed',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Text input component that supports labels, validation, and three states - primary, secondary and error.',
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

// Primary TextField
export const Primary: Story = {
  args: {
    label: 'Username',
  },
};

// Secondary TextField
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Favourite crispy snack'
  }
}

export const Validation: Story = {
  render: () => {
    const [error, setError] = React.useState<string | undefined>();

    const handleChange = (value: string) => {
      if (value.length < 3) {
        setError('Input must be at least 3 characters long');
      } else {
        setError(undefined);
      }
    };

    return (
      <TextField
        label="Username"
        variant={error ? 'error' : undefined}
        validationError={error}
        onChange={handleChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing live validation as user types.',
      },
    },
  },
};