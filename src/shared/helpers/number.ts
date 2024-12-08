export const getPositive = (number: string | number): number => {
  return Math.max(+number, 0);
};

export const round = (value: number) => Math.round(value * 10000) / 10000;
