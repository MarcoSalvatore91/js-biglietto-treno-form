console.log('JS OK!');

/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). */

const name = document.getElementById('name').innerHTML = 'Nome Cognome';
console.log(name);

const kilometers = document.getElementById('kilometers').innerHTML = 'Km da percorrere';
console.log(kilometers);

const age = document.getElementById('age').innerHTML = "Fascia d'età";
console.log(age);

const sendButton = document.getElementById('send').innerHTML = 'Genera';
console.log(send);

const cancelButton = document.getElementById('cancel').innerHTML = 'Annulla';
console.log(cancel);