// duodamas "array of strings"
// gauti vientisa "string", kuris sudarytas is:
// - zodzio pirmos raides
// - zodzio vidurines raides
// - zodzio paskutines raides

// TESTAI:
// vientisasTekstas(['labas', 'rytas']) -> 'lbsrts'
// vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']) -> 'maonmsyragts'
// vientisasTekstas(['as', 'i', 'ten']) -> 'aasiiiten'

// REIKIAMOS FUNKCIJOS:
// function vientisasTekstas - sujungia array i vientisa string
// function pirmaRaide('labas') -> 'l'
// function vidurineRaide('labas') -> 'b'
// function paskutineRaide('labas') -> 's'
function vientisasTekstas(pirmaRaide, vidurineRaide, paskutineRaide) {
    return pirmaRaide + vidurineRaide + paskutineRaide;
}