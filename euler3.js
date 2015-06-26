//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var number = 600851475143;
for(var i = 2; number >= i; i++) {
  while(number%i == 0) {
    number/=i;
  }
}

console.log(i-1);