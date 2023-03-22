import { deepClone } from '../src'

describe('deepClone', () => {
  test('deepClone should work with primitive types', async () => {
    const symbol = Symbol()
    expect(deepClone('hello')).toBe('hello')
    expect(deepClone(100)).toBe(100)
    expect(deepClone(true)).toBe(true)
    expect(deepClone(symbol)).toBe(symbol)
  })

  test('deepClone should work with array', async () => {
    const symbol = Symbol()
    const val = ['hello', 100, false, symbol]
    const res = deepClone(val)
    expect(res.length).toBe(4)
    expect(res[0]).toBe('hello')
    expect(res[1]).toBe(100)
    expect(res[2]).toBe(false)
    expect(res[3]).toBe(symbol)
  })

  test('deepClone should work with object', async () => {
    const symbol = Symbol()
    const val = {
      1: 'num',
      str: 'str',
      [symbol]: symbol,
      arr: [
        {
          foo: 'bar',
        },
      ],
    }
    const res = deepClone(val)
    expect(res[1]).toBe('num')
    expect(res['str']).toBe('str')
    expect(res[symbol]).toBe(symbol)
    expect(res['arr']).toBeInstanceOf(Array)
    expect(res['arr'][0]['foo']).toBe('bar')
  })

})
