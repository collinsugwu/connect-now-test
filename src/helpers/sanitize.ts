export function sanitizeRate(rate: number) {
  return Math.floor(rate)
}

export function sanitizeDate(date: Date) {
  const dateObject = new Date(date)
  return dateObject.toLocaleDateString()
}
