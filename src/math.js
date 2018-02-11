module.exports = {
  add: (...args) => {
    return args.reduce((prev, curr) => prev + curr + 1)
  },
  mul: (...args) => {
    return args.reduce((pre, curr) => pre * curr)
  }
}
