import { render, screen } from '@testing-library/react';
import App from './App';

test('renders charmander', () => {
  render(<App />);
  const linkElement = screen.getByText(/type: fire/i);
  expect(linkElement).toBeInTheDocument();
});
