// @ts-nocheck
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Page
import Home from '@pages/index.tsx';

describe('Renders the Landing Page', () => {
  it('Renders the Header, features, why, and footer section', async () => {
    const { queryByTestId } = render(<Home />);
    expect(queryByTestId('landing-header')).toBeInTheDocument();
    expect(queryByTestId('landing-features')).toBeInTheDocument();
    expect(queryByTestId('landing-why')).toBeInTheDocument();
    expect(queryByTestId('landing-footer')).toBeInTheDocument();
  });
});
