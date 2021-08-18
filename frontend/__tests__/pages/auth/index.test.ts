import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

// Objects
// @ts-ignore
import Index from './pages/auth/index.tsx';

describe('Auth Index Page', () => {
  it('add', () => {
    expect(2 + 2).toBe(4);
  });
});

export {};
