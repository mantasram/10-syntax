 function vidurineRaide(text) {
    //     var position;
    //     var length;

    //     if(text.length % 2 == 1) {
    //         position = text.length / 2;
    //         length = 1; 
    //     } else {
    //         position = text.length / 2 - 1;
    //         length = 2;
    //     }

   

    //     return text.substring(position, position + length);
    // } 
    if (text === '') {
        return '';
    }
    const index = Math.ceil(text.length / 2 - 1);
    return text[index];
}

    
export { vidurineRaide };


console.log(vidurineRaide('labas'));

