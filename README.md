# throttle-and-debounce

## INSTALL

```
pnpm install @armantang/util
```

## QUICK START

### throttle

```typescript
import { throttle } from '@armantang/util';

const callback = function (ev: MouseEvent) {
  console.log(this, ev)
}
const listener = throttle(callback)
window.addEventListener('click', listener)
```

### debounce

```typescript
import { debounce } from '@armantang/util';

const callback = function (ev: MouseEvent) {
  console.log(this, ev)
}
const listener = throttle(callback)
window.addEventListener('click', listener)
```

### scrollTo

```typescript
import { scrollTo } from '@armantang/util'

window.onclick = () => {
  scrollTo({
    target: window,
    top: 0,
    duration: 300,
    type: 'ease',
  }).then(() => {
    console.log('end')
  })
}
```

### deepClone

Support json data types and symbol

```typescript
import { deepClone } from '@armantang/util'

const obj = { foo: 'bar' }
const clone = deepClone(obj)
```

### formatDate

```typescript
import { formatDate } from '@armantang/util'

const dateStr = '2023-01-01T00:00:00+00:00'
const date = new Date(dateStr)
const dateNum = date.getTime()
// 2023-01-01 08:00:00 000
console.log(formatDate(dateStr))
console.log(formatDate(date))
console.log(formatDate(dateNum))
```

### formatISODate

```typescript
import { formatISODate } from '@armantang/util'

const dateStr = '2023-01-01T00:00:00+00:00'
const date = new Date(dateStr)
const dateNum = date.getTime()
// 2023-01-01T08:00:00+08:00
console.log(formatISODate(dateStr))
console.log(formatISODate(date))
console.log(formatISODate(dateNum))
```
