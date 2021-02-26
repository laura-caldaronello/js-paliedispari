// palindroma

function palindroma(parola) {
  var bool = 'la parola non è palindroma';
  var i = 0;
  while (i < parola.length / 2 && parola[i] == parola[parola.length - 1 - i]) {
    i++;
  }
  if (i + 1 > parola.length / 2) {
    bool = 'la parola è palindroma';
  }
  return bool;
}

var word = prompt('inserire parola');
console.log(palindroma(word));

// /palindroma

// pari e dispari

function rand1to5() {
  var x = Math.floor(Math.random() * 4) + 1;
  return x;
}
function isOdd(x) {
  if (x % 2 == 0) {
    return false;
  }
  else {
    return true;
  }
}

var evenodd = prompt('pari o dispari?');
var number = prompt('numero da 1 a 5');
var somma = rand1to5() + number;
if ((evenodd == 'pari' || evenodd == 'dispari') && parseInt(number) == number && 1 < number && number < 5) { /* tutti i controlli che mi vegono in mente */
  if ((evenodd == 'pari' && !isOdd(somma)) || evenodd == 'dispari' && isOdd(somma)) {
    console.log('hai vinto!');
  }
  else {
    console.log('hai perso');
  }
}

// /pari e dispari