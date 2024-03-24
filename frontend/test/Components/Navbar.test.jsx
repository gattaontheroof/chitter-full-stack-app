import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from "../../src/Components/Navbar";

describe('Navbar components', () => {
    test('renders Navbar with the correct components ', () => {
        render(<Navbar />);
        const logoElement = screen.getByAltText('Logo');
        expect(logoElement).toBeInTheDocument();
      });
      
      test('renders Login button when currentUser is null', () => {
        render(<Navbar />);
        const loginButton = screen.getByText(/Login/i);
        expect(loginButton).toBeInTheDocument();
      });
      
      test('renders Logout button when currentUser is not null', () => {
        render(<Navbar currentUser={{}} />);
        const logoutButton = screen.getByText(/Logout/i);
        expect(logoutButton).toBeInTheDocument();
      });
      
      test('calls onLoginClick when Login button is clicked', () => {
        const onLoginClick = vi.fn();
        render(<Navbar onLoginClick={onLoginClick} />);
        const loginButton = screen.getByText(/Login/i);
        fireEvent.click(loginButton);
        expect(onLoginClick).toHaveBeenCalled();
    });
});