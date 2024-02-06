function inchToFeet(inch){
    const feet = inch/12;
    const feetSum = parseInt(feet);
    const inchSum = inch % 12;
   const result = feetSum+'Ft'+inchSum+'inch';
   return result;
}
const sum=inchToFeet(75);
console.log(sum);