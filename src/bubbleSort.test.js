import bubbleSort from './bubbleSort'

it('bubbleSort', () => {
  expect(bubbleSort([1])).toEqual([1])
  expect(bubbleSort([1, 2])).toEqual([1, 2])
  expect(bubbleSort([2, 1])).toEqual([1, 2])
  expect(bubbleSort([4, 7, 1, 7, 3])).toEqual([1, 3, 4, 7, 7])
})
