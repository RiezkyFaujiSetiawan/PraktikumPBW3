const calculator = (operator, ...numbers) => {
  let result = numbers[0];
  
  for(let i = 1; i < numbers.length; i++) {
    switch(operator) {
      case '+':
        result += numbers[i];
        break;
      case '-':
        result -= numbers[i];
        break;
      case '*':
        result *= numbers[i];
        break;
      case '/':
        result /= numbers[i];
        break;
      case '%':
        result %= numbers[i];
        break;
      default:
        return 'Invalid operator!';
    }
  }
  
  return result;
}

console.log(calculator('+', 1, 2, 3)); // Output: 6
console.log(calculator('-', 10, 5, 2)); // Output: 3
console.log(calculator('*', 2, 4, 5)); // Output: 40
console.log(calculator('/', 100, 2, 5)); // Output: 10
console.log(calculator('%', 20, 3)); // Output: 2
console.log(calculator('^', 1, 2, 3)); // Output: 'Invalid operator!'
