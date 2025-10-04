export function formatDate(d: Date) {
  if (Number.isNaN(d.getTime())) return d
  return new Intl.DateTimeFormat(undefined, {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

export function formatAmount(amount: number) {
  const sign = amount < 0 ? '-' : ''
  const abs = Math.abs(amount).toFixed(2)
  return `${sign}$${abs}`
}
