// duodamas "array of strings"
// gauti vientisa "string", kuris sudarytas is:
// - zodzio pirmos raides
// - zodzio vidurines raides
// - zodzio paskutines raides



// REIKIAMOS FUNKCIJOS:
// function vientisasTekstas - sujungia array i vientisa string
// function pirmaRaide('labas') -> 'l'
// function vidurineRaide('labas') -> 'b'
// function paskutineRaide('labas') -> 's'


 import { pirmaRaide } from './pirmaRaide.js';
 import { vidurineRaide } from './vidurineRaide.js';
 import { paskutineRaide } from './paskutineRaide.js';

function vientisasTekstas(textList) {
     let answer = '';

     for (let i = 0; i < textList.length; i++) {
          const text = textList[i]
          answer += pirmaRaide(text) + vidurineRaide(text) + paskutineRaide(text);
     }


     return answer;
} ;


const s1 = vientisasTekstas(['labas', 'rytas']);
console.log(s1, '->', 'lbsrts');

const s2 = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
console.log(s2, '->', 'maonmsyragts');

const s3 = vientisasTekstas(['as', 'i', 'ten']);
console.log(s3, '->', 'aasiiiten');

const s4 = vientisasTekstas(['i']);
console.log(s4, '->', 'iii')