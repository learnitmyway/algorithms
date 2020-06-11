export default function bubbleSort(arr) {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = true
        const temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}
