import { formatDate } from '../src'

describe('formatDate', () => {

  const dateStr = '2023-01-01T00:00:00+00:00'
  const date = new Date(dateStr)
  const dateNum = date.getTime()

  test('formatDate should work', async () => {
    expect(formatDate('hello')).toBe(null)
    expect(formatDate(date)).toBe('2023-01-01 08:00:00 000')
    expect(formatDate(dateStr)).toBe('2023-01-01 08:00:00 000')
    expect(formatDate(dateNum)).toBe('2023-01-01 08:00:00 000')

    expect(formatDate(date, 'YYYY-mm-dd')).toBe('2023-01-01')
    expect(formatDate(date, 'YYYY-mm-dd HH:MM:SS')).toBe('2023-01-01 08:00:00')
    expect(formatDate(date, 'YYYY/mm/dd HH:MM:SS')).toBe('2023/01/01 08:00:00')
    expect(formatDate(date, 'Y-m-d H:M:S s')).toBe('2023-1-1 8:0:0 0')
    expect(formatDate(date, 'Y')).toBe('2023')
  })

})
