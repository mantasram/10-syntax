const pirmaRaide = text => text.charAt(0);

console.log(pirmaRaide('labas'));

const vidurineRaide = text => {
const index = Math.ceil(text.length / 2 - 1);
return text[index];
}

console.log(vidurineRaide('labas'));

const paskutineRaide = text => text.charAt(text.length-1);

console.log(paskutineRaide('labas'));







