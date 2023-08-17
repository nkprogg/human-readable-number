module.exports = function toReadable (number) {
   const digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
   "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
   const tenths = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

number < 999 && number > 0;

if (number < 20) {
 // console.log(digit[number]);  (3)
   return digit[number];
}

if (number < 100 && number % 10 === 0) {
 // console.log(tenths[number / 10]);      (30)
   return tenths[number / 10];
}

if (number < 100 && number % 10 !== 0) {
 // console.log(tenths[Math.floor(number / 10)] + " " + digit[number % 10]);    (33)
   return tenths[Math.floor(number / 10)] + " " + digit[number % 10];
}

let hundred = "hundred";

if (number > 99 && number % 100 === 0) {
 // console.log(digit[number / 100] + " " + hundred);   (300)
   return digit[number / 100] + " " + hundred;
}

if (number > 99 && number % 100 < 20) {
 // console.log(digit[Math.floor(number / 100)] + " " + hundred + " " + digit[number % 100]);     (303)
   return digit[Math.floor(number / 100)] + " " + hundred + " " + digit[number % 100];
}

if (number > 99 && number % 100 !== 0 && number % 10 === 0) {
 // console.log(digit[Math.floor(number / 100)] + " " + hundred + " " + tenths[(number % 100) / 10]);    (330)
   return digit[Math.floor(number / 100)] + " " + hundred + " " + tenths[(number % 100) / 10];
}

if (number > 99 && number % 100 !== 0 && number % 10 !== 0) {
 // console.log(digit[Math.floor(number / 100)] + " " + hundred + " " + tenths[Math.floor((number % 100) / 10)] + " " + digit[number % 10]);   (333)
   return digit[Math.floor(number / 100)] + " " + hundred + " " + tenths[Math.floor((number % 100) / 10)] + " " + digit[number % 10];
}
}
