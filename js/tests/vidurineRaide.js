function vidurineRaide(string) {
        var position;
        var length;

        if(string.length % 2 == 1) {
            position = string.length / 2;
            length = 1;
        } else {
            position = string.length / 2 - 1;
            length = 2;
        }

        return string.substring(position, position + length);
    }
    
export { vidurineRaide };


console.log(vidurineRaide('labas'));

