// ex1
function sumOfTheTwoIntegers(Number1,Number2) {
  var num1 = Number1;
  var num2 = Number2;
  var sum = num1 + num2;
  if(num1 === num2) {
    return sum * 3;
  } 
  return sum;

}
console.log("Ex1");
console.log(sumOfTheTwoIntegers(5,10));
console.log(sumOfTheTwoIntegers(5,5));
// ex2
function subNumWithInteger(number) {
  var num = number;
  var result = Math.abs(19 - num);
  if(num <= 19) {
    return result;
  }
  return result * 3;
}
console.log("Ex2");
console.log(subNumWithInteger(12));
console.log(subNumWithInteger(19));
console.log(subNumWithInteger(22));
// ex3
function maskedNumber(masked_number) {
  var numMasked = masked_number;
  var result = [];
  for(var i = 0; i<= 9; i++) {
    var numLastReplace = numMasked.replace("*",i);
    if(numLastReplace % 3 === 0) {
      result.push(numLastReplace);
    }
  }
  return result;
}
console.log("Ex3");
console.log(maskedNumber('1*9'));
//ex4
function maskedNumber2(masked_number) {
  var numMasked = masked_number;
  var result = [];
  for(var i = 0; i<= 9; i++) {
    var numLastReplace = numMasked.replace("*",i);
    if(numLastReplace % 6 == 0) {
      result.push(numLastReplace);
    }
  }
  return result;
}
console.log("Ex4");
console.log(maskedNumber2('1*9'));
console.log(maskedNumber2('1234567890*'));
