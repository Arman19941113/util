export type CloneObj = { [key: string | number | symbol]: CloneVal }
export type CloneArr = Array<CloneVal>
export type CloneVal = CloneObj | CloneArr | string | number | boolean | symbol | null

// Support json data types and symbol
export function deepClone<T extends CloneVal> (val: T): T {
  if (typeof val !== 'object' || val === null) return val

  if (Array.isArray(val)) {
    return val.map(item => deepClone(item)) as T
  }

  const obj: CloneObj = {}
  for (const key of Reflect.ownKeys(val)) {
    obj[key] = deepClone(val[key])
  }
  return obj as T
}
