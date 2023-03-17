export function throttle<T, U> (
  callback: (this: T, param?: U) => void,
  wait = 300,
) {
  let timer: any = null

  const listener = function (this: T, param?: U) {
    if (timer) return

    timer = setTimeout(() => {
      timer = null
      callback.call(this, param)
    }, wait)
  }

  listener.cancel = function (): boolean {
    if (timer) {
      clearTimeout(timer)
      timer = null
      return true
    }
    return false
  }

  return listener
}
