import { render, screen } from '@testing-library/react';
import { MyHeader } from '../../../../src/components/MyHeader';

it('renders Heading correcty', () => {
  render(<MyHeader />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
