function oddAvg(numbers){
const odd=[];
for(const num of numbers){
    if(num % 2 ===1){
        odd.push(num);
    }
}
console.log(odd);
let sum = 0;
for(const od of odd){
    sum+= od;
}
const count = odd.length;
console.log(sum, count);
const average=
 sum / count;
return average;
 }
const numbers=[42, 13, 58, 65, 81, 7];
const avg=oddAvg(numbers)
console.log(`Average Number Is:`, avg);