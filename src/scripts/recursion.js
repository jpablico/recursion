function fibs(num) {
  let array = [];
  let a = 0;
  let b = 1;
  let c;
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      array.push(a);
    } else if (i === 1) {
      array.push(b);
    } else {
      c = a + b;
      a = b;
      b = c;
      array.push(c);
    }
  }
  return array;
}

function fibsRec(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }
  const fibs = fibsRec(num - 1);
  return [...fibs, fibs[fibs.length - 1] + fibs[fibs.length - 2]];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export { fibs, fibsRec, mergeSort };