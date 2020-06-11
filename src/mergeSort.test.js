import mergeSort from './mergeSort'

it('mergeSort', () => {
  let arr = [1]
  mergeSort(arr)
  expect(arr).toEqual([1])

  arr = [1, 2]
  mergeSort(arr)
  expect(arr).toEqual([1, 2])

  arr = [2, 1]
  mergeSort(arr)
  expect(arr).toEqual([1, 2])

  arr = [3, 2, 1]
  mergeSort(arr)
  expect(arr).toEqual([1, 2, 3])

  arr = [4, 7, 1, 7, 3]
  mergeSort(arr)
  expect(arr).toEqual([1, 3, 4, 7, 7])
})
