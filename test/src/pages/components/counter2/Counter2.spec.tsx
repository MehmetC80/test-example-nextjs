import { render, screen } from '@testing-library/react';
import Counter2 from '../../../../../src/components/counter2/Counter2';
import user from '@testing-library/user-event';
describe('Counter2', () => {
  it('renders correctly', () => {
    render(<Counter2 count={0} />);
    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  it('handlers are called', async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <Counter2
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementBtn = screen.getByRole('button', {
      name: 'Increment',
    });

    const decrementBtn = screen.getByRole('button', {
      name: 'Decrement',
    });
    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
