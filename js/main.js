// palindroma

function palindroma(parola) {
  var bool = false;
  var i = 0;
  while (i < parola.length / 2 && parola[i] == parola[parola.length - 1 - i]) {
    i++;
  }
  if (i + 1 > parola.length / 2) {
    bool = true;
  }
  return bool;
}

var word = prompt('inserire parola');
console.log(palindroma(word));

// /palindroma