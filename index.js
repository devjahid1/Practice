var bmi,  weight=69,  height= 3;
bmi = weight / (height) ^ 2;
if(bmi < 18.5){
    console.log("Under Weight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("Normal");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("Over Weight");
}
else{
    console.log(" Yoou are dad");
}

