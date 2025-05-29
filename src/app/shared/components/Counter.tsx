import { useEffect, useState } from 'react';
import type { CounterProps } from '../../core/constants/types';

export const Counter = ({ value: defaultValue, onChange, min = 1, max = 1000 }: CounterProps) => {
  const isControlled = typeof onChange === 'function';
  const [internalValue, setInternalValue] = useState(defaultValue);

  const value = isControlled ? defaultValue : internalValue;

  const updateValue = (newValue: number) => {
    if (newValue < min || newValue > max) return;

    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleIncrease = () => {
    updateValue(value + 1);
  };

  const handleDecrease = () => {
    updateValue(value - 1);
  };

  useEffect(() => {
    if (!isControlled) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  return (
    <div className='quantity-selector'>
      <button onClick={handleDecrease} className='btn-decrease' disabled={value <= min}>
        -
      </button>
      <span className='quantity'>{value}</span>
      <button onClick={handleIncrease} className='btn-increase' disabled={value >= max}>
        +
      </button>
    </div>
  );
};
