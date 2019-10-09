const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 let sliced = [];
 let newarr = [];
 let newarr1 = [];
 let newarr2 = [];
     for (let i = 0; i < expr.length / 10; i++){
     sliced[i] = expr.slice(i*10,(i*10)+10);
     }
     for (let j=0; j <= (expr.length / 10) - 1; j++) {
     newarr[j] = sliced[j].split('10').join('.');
     newarr1[j] = newarr[j].split('11').join('-');
     }
 
 const lettersArr = newarr1.map(function (item) {
   return MORSE_TABLE[item];
 });
 
 const decode = lettersArr.join("");
 
 return decode;
}

module.exports = {
    decode
}

