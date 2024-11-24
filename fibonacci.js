function fibonacci(n) {
  if (n > 1) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  } else {
    return [0];
  }
}

console.log(fibonacci(5));

// Big (O) = O(n), because calculation is dependent on input size
