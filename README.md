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

### throttle

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
