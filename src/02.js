const isFibonacci = (num) => {
    let fibonacci = [0, 1];
    
    for (let i = 2; fibonacci[i - 1] <= num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    if (fibonacci.includes(num)) {
        console.log(`O numero ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O numero ${num} NÃO pertence à sequência de Fibonacci.`);
    }
}

// Informe o numero
isFibonacci(34)