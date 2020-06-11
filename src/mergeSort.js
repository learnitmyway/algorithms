function merge(arr, start, mid, end) {
  const temp = []
  let startLeft = start
  let endLeft = mid
  let startRight = mid + 1
  let endRight = end
  let index = startLeft

  // While there are elements in both subarrays
  while (startLeft <= endLeft && startRight <= endRight) {
    // Compare numbers at the start of the subarrays
    if (arr[startLeft] <= arr[startRight]) {
      // Append smaller to merged array
      temp[index] = arr[startLeft]
      index++
      startLeft++
    } else {
      // Append smaller to merged array
      temp[index] = arr[startRight]
      index++
      startRight++
    }
  }

  // While elements remain in subarray 1 (but not subarray 2)
  while (startLeft <= endLeft) {
    // Append element to merged array
    temp[index] = arr[startLeft]
    startLeft++
    index++
  }

  // While elements remain in subarray 2 (but not subarray 1)
  while (startRight <= endRight) {
    // Append element to merged array
    temp[index] = arr[startRight]
    startRight++
    index++
  }

  // Copy newly sorted array over to original array
  const length = end + 1 - start
  for (let i = endRight, j = 0; j < length; i--, j++) {
    arr[i] = temp[i]
  }
}

export default function mergeSort(arr, start, end) {
  if (start === undefined) start = 0
  if (end === undefined) end = arr.length - 1
  if (start < end) {
    const mid = Math.floor((start + end) / 2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid + 1, end)
    merge(arr, start, mid, end)
  }
}
