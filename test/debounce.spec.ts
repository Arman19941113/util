import { sleep } from './util'
import { debounce } from '../src'

describe('debounce', () => {
  test('debounce should work', async () => {
    let calledTimes = 0
    const callback = () => calledTimes++

    const listener = debounce(callback, 20)
    listener()
    listener()

    await sleep(10)
    listener()
    expect(calledTimes).toBe(0)
    await sleep(10)
    expect(calledTimes).toBe(0)
    await sleep(20)
    expect(calledTimes).toBe(1)
  })

  test('debounce listener argument should work', async () => {
    const msg = 'hello'

    const callback = (callbackParam?: string) => {
      if (callbackParam) expect(callbackParam).toBe(msg)
    }

    const listener = debounce(callback, 10)
    listener(msg)
  })

  test('debounce listener context should work', async () => {
    const name = 'arman'

    const callback = function (this: { name: string }) {
      expect(this.name).toBe(name)
    }

    const listener = debounce(callback, 10)
    listener.call({ name })
  })

  test('debounce cancel should work', async () => {
    let calledTimes = 0
    const callback = () => calledTimes++

    const listener = debounce(callback, 10)
    listener()
    listener.cancel()

    await sleep(10)
    expect(calledTimes).toBe(0)
  })
})
