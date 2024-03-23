// copilot:

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AuthModal from '../../src/Components/AuthModal';

describe('AuthModal', () => {
  let mockOnLogin, mockOnCancel;

  beforeEach(() => {
    mockOnLogin = jest.fn();
    mockOnCancel = jest.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(<AuthModal onLogin={mockOnLogin} onCancel={mockOnCancel} />);
    expect(getByText('Hear the latest chatter!')).toBeInTheDocument();
  });

  it('has a login button', () => {
    const { getByText } = render(<AuthModal onLogin={mockOnLogin} onCancel={mockOnCancel} />);
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('calls onLogin when login button is clicked', () => {
    const { getByText } = render(<AuthModal onLogin={mockOnLogin} onCancel={mockOnCancel} />);
    fireEvent.click(getByText('Login'));
    expect(mockOnLogin).toHaveBeenCalled();
  });

  it('calls showRegister when register link is clicked', () => {
    const { getByText } = render(<AuthModal onLogin={mockOnLogin} onCancel={mockOnCancel} />);
    fireEvent.click(getByText('Register'));
    expect(getByText('RegisterForm')).toBeInTheDocument();
  });
});