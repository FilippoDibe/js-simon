// generero in modo casuale 5 numeri compresi da 1 a 100 
// li salvo in un array  
// e stampo a schermo il risultato 
// resta a schermo per 30 secondi 

// ora parte il gioco 
// dopo che i numeri sono spariti l'utente deve reinserire manualmente i numeri e verificare 
// ci saranno due versioni 
// versione 1 --> l'ordine non e importante 
// versione 2 --> ordine importante 


// fine del gioco e controllo dei risultati 



// funzione che genera i numeri 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  


// funzinone che ne genera 5 e poi li inserisce in un array
function generaEstampaInArray(){
    const array= [];

    for(let i = 0; i < 5; i++){
        const numeroCasuale= getRandomIntInclusive(1,100);
        array.push(numeroCasuale)
    }
    return array;

}

const numeriGenerati = generaEstampaInArray();
document.getElementById("numeri-casuali").textContent="ecco i numeri estratti: " + numeriGenerati
console.log("Numeri casuali generati:", numeriGenerati);

setTimeout(function(){
    document.getElementById("numeri-casuali").textContent= "";

},3000);

// prende i numeri inseriti dall'utente e ci genera un array 
function prendiInput(){
    const input = document.getElementById("input-numeri").value; 
    const numeriInseriti = input.split(',').map(numero => parseInt(numero.trim(), 10));

    const risultato = controllo(numeriGenerati, numeriInseriti);
    alert(risultato);
}

function controllo(numeriGenerati, numeriInseriti){
    if (numeriGenerati.length !== numeriInseriti.length){
        return "Numeri inseriti non corretti. Assicurati di inserire esattamente 5 numeri.";
    }
    for (let i = 0; i < numeriGenerati.length; i++) {
        if (numeriGenerati[i] !== numeriInseriti[i]) {
          return "Numeri inseriti non corretti. Riprova!";
        }
      }
    
      return "Complimenti! Hai indovinato tutti i numeri.";
}
