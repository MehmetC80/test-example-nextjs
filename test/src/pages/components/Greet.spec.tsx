/**
 * Greet should render the text hello if is a name is passed into the component
 * it should render hello followed by the name
 * TDD approach
 */

import { render, screen } from '@testing-library/react';
import Greet from '../../../../src/components/Greet';

it('Greet renders correcty', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

it('Greet renders  with a name correcty', () => {
  render(<Greet name='memo' />);
  const textElement = screen.getByText('Hello memo');
  expect(textElement).toBeInTheDocument();
});
