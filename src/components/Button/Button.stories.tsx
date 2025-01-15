import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import './Button.scss';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style variant of the button',
      defaultValue: 'primary',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Button component that supports different variants and automatically includes icons based on the variant.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary variant
export const Primary: Story = {
  args: {
    label: 'Submit',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button variant with paper plane icon',
      },
    },
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    label: 'Submit',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button variant with back arrow icon',
      },
    },
  },
};

// Interactive example with state
export const InteractiveExample: Story = {
  render: () => {
    const handleClick = () => {
      alert('Button clicked!');
    };

    return <Button label="Click" variant="primary" onClick={handleClick} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Reacts to button click',
      },
    },
  },
};
