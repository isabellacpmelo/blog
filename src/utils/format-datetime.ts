import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate)

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", { locale: ptBR })
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate)

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}

const rawDate = '2025-09-27T16:34:25.531Z'
console.log(rawDate)
console.log(formatRelativeDate(rawDate))
