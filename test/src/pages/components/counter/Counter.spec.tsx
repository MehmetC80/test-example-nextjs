import Counter from '../../../../../src/components/counter/Counter';
import { screen, render, getByRole } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('Counter', () => {
  it(' renders correcty', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  it(' renders initial state: count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  it('renders a count of 1 after clicking the increment button', async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  it('renders a count of 2 after clicking twice', async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    // await user.click(buttonElement);
    // await user.click(buttonElement);

    await user.dblClick(buttonElement);

    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('2');
  });

  /**
   * Useful user.events
   * click()
   * bdlClick()
   * tripleClick()
   * hover()
   * unHover()
   */

  it('renders a count of 10 after clicking the set button', async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', {
      name: 'Set',
    });

    await user.click(setButton);

    const counterElement = screen.getByRole('heading');

    expect(counterElement).toHaveTextContent('10');
  });

  it('render elements are focused in the right order', async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
