import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

jest.mock('../Icon/Icon', () => ({
  __esModule: true,
  default: {
    WarningSign: () => <span data-testid="warning-icon" />,
  },
}));

describe('TextField', () => {
  it('renders input without label by default', () => {
    render(<TextField />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByRole('label')).not.toBeInTheDocument();
  });

  it('renders with label when provided', () => {
    render(<TextField label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  describe('validation error', () => {
    it('renders and icon with message when validation error is provided', () => {
      render(<TextField validationError="Test error" />);
      expect(screen.getByText('Test error')).toBeInTheDocument();
      expect(screen.getByTestId('warning-icon')).toBeInTheDocument();
    });

    it('does not render error container when no validation error', () => {
      render(<TextField />);
      expect(screen.queryByTestId('warning-icon')).not.toBeInTheDocument();
      expect(screen.queryByRole('crispy-textfield__error-container')).not.toBeInTheDocument();
    });
  });

  describe('event handling', () => {
    it('updates value on change', () => {
      render(<TextField />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test value' } });
      expect(input).toHaveValue('test value');
    });

    it('calls onChange handler with input value', () => {
      const handleChange = jest.fn();
      render(<TextField onChange={handleChange} />);

      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'test' },
      });
      expect(handleChange).toHaveBeenCalledWith('test');
    });

    it('calls onEnterPress handler when Enter key is pressed', () => {
      const handleEnterPress = jest.fn();
      render(<TextField onEnterPress={handleEnterPress} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test value' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(handleEnterPress).toHaveBeenCalledWith('test value');
    });

    it('does not call onEnterPress handler for other keys', () => {
      const handleEnterPress = jest.fn();
      render(<TextField onEnterPress={handleEnterPress} />);

      const input = screen.getByRole('textbox');
      fireEvent.keyDown(input, { key: 'Space' });

      expect(handleEnterPress).not.toHaveBeenCalled();
    });
  });
});
