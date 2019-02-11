// a function to test
export const sum = (...args) => {
  if (args.some(v => Number.isNaN(v))) throw new TypeError('NaN')
  return args.reduce((acc, n) => acc + n, 0)
}
