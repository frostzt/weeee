import { render, screen } from '@testing-library/react';

// Components
import AuthPage from '@pages/auth/index.tsx';

describe('AuthPage', () => {
  it('switches the page component from signup to signin', async () => {
    render(<AuthPage />);

    // First renders the signup component
    expect(await screen.getByRole('button', { name: /sign up/i })).toBeDefined();
    screen.getByText(/sign in/i).click();

    // Renders the signin component
    expect(await screen.getByRole('button', { name: /sign in/i })).toBeDefined();
  });
});
