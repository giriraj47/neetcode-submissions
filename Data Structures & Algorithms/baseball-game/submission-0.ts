class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === "C") {
      record.pop();
    } else if (op === "D") {
      const double = record[record.length - 1] * 2;
      record.push(double);
    } else if (op === "+") {
      const sum = record[record.length - 1] + record[record.length - 2];
      record.push(sum);
    } else {
      record.push(Number(op));
    }
  }

  return record.reduce((acc, cur) => acc + cur, 0);
    }
}
