import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { cacheLife } from 'next/dist/server/use-cache/cache-life'
import { cacheTag } from 'next/dist/server/use-cache/cache-tag'

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate)

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", { locale: ptBR })
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate)

  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs)

  return format(date, 'HH:mm:ss', { locale: ptBR })
}

export async function formatHourCached() {
  'use cache'
  cacheLife('seconds')
  cacheTag('formatHourCached')

  return formatHour(Date.now())
}
