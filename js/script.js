console.log('JS OK!');

/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). */

// 1a- Creare delle costanti e variabili
const fsName = document.getElementById('fsname');

const number = document.getElementById('number');

const askAge = document.getElementById('askAge')

const send = document.getElementById('send');

const cancel = document.getElementById('cancel');

const resultInfo = document.getElementById('result-info');

const resultAge = document.getElementById('result-age');

const carrage = document.getElementById('carrage');

const cpCode = document.getElementById('cp-code');

const resultPrice = document.getElementById('final-price')

// 1b- Creare delle variabili

let carrageRandom;
let cpCodeRandom;

// 2- Utilizzare la proprietà value

    send.addEventListener('click', function() {

        // ! Validazione
        if (!fsName.value || isNaN(number.value) || (!number.value)) 
            alert('Inserire correttamente tutti i campi!');
        else {
            let infoUserName = fsName.value;
            console.log(infoUserName);
            resultInfo.innerHTML = infoUserName;
            
            let km = parseInt(number.value);
            console.log(km);
            
            let userAge = askAge.value;
            console.log(userAge);
        
            // 3- Generare numero carrozza e codice cp 
        
            carrageRandom = Math.floor(Math.random() * 12) + 1;
            carrage.innerHTML = carrageRandom;
        
            cpCodeRandom = Math.floor(Math.random() * 10000) + 1;
            cpCode.innerHTML = cpCodeRandom;
        
            // 4- Creare costanti di calcolo
        
            const price = (km * 0.21);
            const underDiscount = (price - (price * 20 / 100)).toFixed(2);
            const overDiscount = (price - (price * 40 / 100)).toFixed(2);
        
            // 5- Condizioni sul prezzo
            
            if (userAge === 'Under 18') {
                resultAge.innerHTML = 'Sconto Junior';
                resultPrice.innerHTML = `${underDiscount}€`; 
            } else if (userAge === 'Over 65') {
                resultAge.innerHTML = 'Sconto Senior';
                resultPrice.innerHTML = `${overDiscount}€`;
            } else {
                resultAge.innerHTML = 'Nessuno Sconto Applicato';
                resultPrice.innerHTML = `${price}€`; 
            }
        
            fsName.value = '';
            number.value = '';
            askAge.value = '--';

        }  
    })

    cancel.addEventListener('click', function() {
        fsName.value = '';
        number.value = '';
        askAge.value = '--';
    })





