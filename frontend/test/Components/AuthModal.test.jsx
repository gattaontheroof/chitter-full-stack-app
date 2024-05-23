// copilot:

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AuthModal from '../../src/Components/AuthModal';

describe('AuthModal', () => {
  let mockOnLogin, mockOnCancel;

  beforeEach(() => {
    mockOnLogin = vi.fn();
    mockOnCancel = vi.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(<AuthModal onLogin={mockOnLogin} onCancel={mockOnCancel} />);
    expect(getByText('Hear the latest chatter!')).toBeInTheDocument();
  });

  it('has a login button', () => {
    const { getByText } = render(<AuthModal onLogin={mockOnLogin} onCancel={mockOnCancel} />);
    expect(getByText('Login')).toBeInTheDocument();
  });
});