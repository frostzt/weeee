// @ts-nocheck
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

// Pages
import Index from '@pages/auth/index.tsx';

describe('Auth Index Page', () => {
  it('Renders the Auth Page', () => {
    const { getByTitle } = render(<Index />);
    expect(getByTitle('Signup or into your account!')).toBeInTheDocument();
  });

  it('Renders the SignUpForm Component', () => {
    const { getByTitle } = render(<Index />);

    expect(getByTitle('Name')).toBeInTheDocument();
    expect(getByTitle('Email')).toBeInTheDocument();
    expect(getByTitle('Username')).toBeInTheDocument();
    expect(getByTitle('Password')).toBeInTheDocument();
    expect(getByTitle('Confirm Password')).toBeInTheDocument();
    expect(getByTitle('Signup button')).toBeInTheDocument();
  });
});
