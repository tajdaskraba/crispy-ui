import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

jest.mock('../Icon/Icon', () => ({
  __esModule: true,
  default: {
    PaperPlane: () => <span data-testid="paper-plane-icon">paper-plane</span>,
    ArrowBack: () => <span data-testid="arrow-back-icon">arrow-back</span>,
  },
}));

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('applies primary variant class by default when variant is undefined', () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('crispy-button--primary');
  });

  it('applies secondary variant class when specified', () => {
    render(<Button label="Test Button" variant="secondary" onClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('crispy-button--secondary');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Test Button" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders primary variant with paper plane icon', () => {
    render(<Button label="Test Button" variant="primary" onClick={() => {}} />);
    expect(screen.getByTestId('paper-plane-icon')).toBeInTheDocument();
  });

  it('renders secondary variant with arrow back icon', () => {
    render(<Button label="Test Button" variant="secondary" onClick={() => {}} />);
    expect(screen.getByTestId('arrow-back-icon')).toBeInTheDocument();
  });

  it('renders null when icon component is not found for variant', () => {
    // @ts-ignore - "invalid" variant does not match ButtonVariant type
    render(<Button label="Test Button" variant="invalid" onClick={() => {}} />);
    const button = screen.getByRole('button');
    const icon = button.querySelector('.crispy-button__icon');
    expect(icon).toBeEmptyDOMElement();
  });
});
