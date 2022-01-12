console.log('JS OK!');

/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). */

// 1- Creare delle costanti
const fsName = document.getElementById('fsname');

const number = document.getElementById('number');

const askAge = document.getElementById('askAge')

const send = document.getElementById('send');

const cancel = document.getElementById('cancel');

const resultPrice = document.getElementById('result-price');

// 2- Creare una variabile

let infoUserName;

// 3- Utilizzare la proprietà value

send.addEventListener('click', function() {

    let infoUserName = fsName.value;
    console.log(infoUserName);
    resultPrice.innerHTML = infoUserName;
    
    let km = parseInt(number.value);
    console.log(km);
    
    let userAge = askAge.value;
    console.log(userAge);
})




