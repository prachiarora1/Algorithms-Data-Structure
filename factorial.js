function factorial(n) {
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac = fac * i;
  }
  return fac;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
