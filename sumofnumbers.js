function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {
    return memo + num;
  });
}

const list = [1, 2, 3, 4, 5];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, 0, 0));
console.log(sumTheSimpleWay(list));
