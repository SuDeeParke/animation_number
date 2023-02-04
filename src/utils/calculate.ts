function getMax(obj: object): number {
  return Math.max(...Object.values(obj))
}
function getMini(obj: object): number {
  return Math.min(...Object.values(obj))
}
function getAverage(obj: object): number {
  let values = Object.values(obj)

  return values.reduce((prev, curr) => {
    return Math.round((prev + curr) / values.length)
  })
}
export { getMax, getMini, getAverage }
