const sen = `I am a web dev`;
let rev = '';
for(const letter of sen){
    rev=letter+rev;
}
console.log(rev);