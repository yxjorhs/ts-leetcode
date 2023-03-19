export function generate(numRows: number): number[][] {
  const res: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    res[i] = [];
    for (let j = 0; j <= i; j++) {
      res[i][j] = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0);
    }
  }

  return res;
}
