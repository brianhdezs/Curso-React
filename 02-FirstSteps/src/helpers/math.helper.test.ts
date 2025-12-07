import { expect, test } from 'vitest';
import { add, subtract, multiply } from './math.helper';

test('shpuld add two numbers correctly', () => {

  const a = 2;
  const b = 3;
  const result = add(a, b);

  expect(result).toBe(a + b);

});

test('should subtract two numbers correctly', () => {

    // ! ARRANGE
    const a = 5;
    const b = 3;
    // ! ACT
    const result = subtract(a, b);
    // ! ASSERT
    expect(result).toBe(a - b);

});
    
test('should multiply two numbers correctly', () => {
    // ! ASSERT
    const a = 4;
    const b = 2;
    // ! ACT
    const result = multiply(a,b);
    // ! ARRANGE
    expect(result).toBe(a * b);
});
