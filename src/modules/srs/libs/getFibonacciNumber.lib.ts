export const getFibonacciNumber = (index: number, memo?: Record<number, number>): number => {
  memo = memo || {};

  if (memo[index]) {
    return memo[index];
  }

  if (index <= 1) {
    return 1;
  }

  return (memo[index] = getFibonacciNumber(index - 1, memo) + getFibonacciNumber(index - 2, memo));
};
