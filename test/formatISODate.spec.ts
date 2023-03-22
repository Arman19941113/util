import { formatISODate } from '../src'

describe('formatISODate', () => {

  const dateStr = '2023-01-01T00:00:00+00:00'
  const date = new Date(dateStr)
  const dateNum = date.getTime()

  test('formatISODate should work', async () => {
    expect(formatISODate('hello')).toBe(null)
    expect(formatISODate(date)).toBe('2023-01-01T08:00:00+08:00')
    expect(formatISODate(dateStr)).toBe('2023-01-01T08:00:00+08:00')
    expect(formatISODate(dateNum)).toBe('2023-01-01T08:00:00+08:00')
  })

})
