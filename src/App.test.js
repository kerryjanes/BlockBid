// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockBid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockBid/i);
    expect(titleElement).toBeInTheDocument();
});
