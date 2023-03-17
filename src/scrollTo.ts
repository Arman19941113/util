export type ScrollToOption = number | {
  target?: Window | Element,
  top?: number,
  duration?: number,
  type?: 'ease' | 'linear'
}

export function scrollTo (param: ScrollToOption = 0): Promise<void> {
  const option = {
    target: window as Window | Element,
    top: 0,
    duration: 300,
    type: 'ease' as 'ease' | 'linear',
  }

  if (typeof param === 'number') {
    option.top = param
  } else if (typeof param === 'object') {
    Object.assign(option, param)
  }

  return new Promise(function (resolve, reject) {
    try {
      const { target, top, duration, type } = option
      const startTop = target instanceof Window
        ? window.scrollY
        : target.scrollTop
      const scrollDistance = top - startTop
      const beginTime = Date.now()

      const animate = function () {
        const nowTime = Date.now()
        const pastTime = nowTime - beginTime
        target.scrollTo({ top: computeCoordinate(pastTime) })
        if (pastTime < duration) {
          requestAnimationFrame(animate)
        } else {
          resolve()
        }
      }

      const computeCoordinate = function (pastTime: number): number {
        let factor = type === 'linear'
          ? pastTime / duration
          : Math.pow(pastTime / duration, 2)
        if (factor > 1) factor = 1
        return startTop + scrollDistance * factor
      }

      requestAnimationFrame(animate)
    } catch (err) {
      reject(err)
    }
  })
}
