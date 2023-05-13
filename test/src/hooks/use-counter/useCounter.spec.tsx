import { renderHook } from '@testing-library/react';
import { useCounter } from '../../../../src/hooks/use-counter/useCounter';
import { act } from 'react-dom/test-utils';

describe('useCounter', () => {
  it('should render the initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it('should  accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  /**
   *
   * wrapp your updating states in an act() function
   */
  it('should increment the count', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should decremnt the count', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
