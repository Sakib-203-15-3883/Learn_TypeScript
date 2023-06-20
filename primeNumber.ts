// This line defines a function named isPrime that takes a single parameter num of type number and returns a boolean value.

function isPrime(num: number): boolean {

    //This block checks if the number (num) is less than or equal to 1. If it is, it means the number is not prime, so the function returns false.

    if (num <= 1) {
      return false;
    }

  //This block represents a for loop that starts from i = 2 and continues until i reaches the square root of the given number (num). It checks if num is divisible by i, and if so, it means the number is not prime, so the function returns false.

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  //This line defines another function named findPrimes that takes a single parameter limit of type number and returns an array of numbers (number[]). 
  
  function findPrimes(limit: number): number[] {
    const primes: number[] = [];
  
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    return primes;
  }
  
  const limit = 100;
  const primes = findPrimes(limit);
  
  console.log(`Prime numbers up to ${limit}:`);
  console.log(primes);
  