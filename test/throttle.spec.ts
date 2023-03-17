import { sleep } from './util'
import { throttle  } from '../src'

describe('throttle', () => {
  test('throttle should work', async () => {
    let calledTimes = 0
    const callback = () => calledTimes++

    const listener = throttle(callback, 20)
    listener()
    listener()

    sleep(10).then(() => {
      listener()
      expect(calledTimes).toBe(0)
    })
    sleep(20).then(() => {
      listener()
      expect(calledTimes).toBe(1)
    })
    sleep(60).then(() => {
      expect(calledTimes).toBe(2)
    })
  })

  test('throttle listener argument should work', async () => {
    const msg = 'hello'

    const callback = (callbackParam?: string) => {
      if (callbackParam) expect(callbackParam).toBe(msg)
    }

    const listener = throttle(callback, 10)
    listener(msg)
  })

  test('throttle listener context should work', async () => {
    const name = 'arman'

    const callback = function (this: { name: string }) {
      expect(this.name).toBe(name)
    }

    const listener = throttle(callback, 10)
    listener.call({ name })
  })

  test('throttle cancel should work', async () => {
    let calledTimes = 0
    const callback = () => calledTimes++

    const listener = throttle(callback, 10)
    listener()
    listener.cancel()

    await sleep(10)
    expect(calledTimes).toBe(0)
  })
})
