export const range = (...args) => {
  // if no arguments were provided, return an empty array
  if (args.length === 0) return []

  if (args.some(d => !Number.isInteger(d)))
    throw new TypeError('All values must be integers')

  // derive the start, stop, and step from the arguments given
  const [start, stop, step] =
    args.length === 1
      ? [0, args[0], 1]
      : args.length === 2
      ? [...args, 1]
      : args

  return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (d, i) => start + i * step
  )
}
