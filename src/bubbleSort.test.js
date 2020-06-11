import bubbleSort from './bubbleSort'

it('bubbleSort', () => {
  let arr = [1]
  bubbleSort(arr)
  expect(arr).toEqual([1])

  arr = [1, 2]
  bubbleSort(arr)
  expect(arr).toEqual([1, 2])

  arr = [2, 1]
  bubbleSort(arr)
  expect(arr).toEqual([1, 2])

  arr = [4, 7, 1, 7, 3]
  bubbleSort(arr)
  expect(arr).toEqual([1, 3, 4, 7, 7])
})
