function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const l = 0;
  const r = arr.length - 1;
  const mid = l + Math.ceil((r - l) / 2);
  return merg(mergeSort(arr.slice(l, mid)), mergeSort(arr.slice(mid, r + 1)));
}

function merg(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }

  while (left.length) sorted.push(left.shift());
  while (right.length) sorted.push(right.shift());

  return sorted;
}

const arr = [9, 3, 7, 5, 6, 4, 8, 2];
console.log(mergeSort(arr));
