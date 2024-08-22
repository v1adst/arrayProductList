
// 1. Array init. (product)
let listaCumparaturi = ['Piine', 'Oua', 'Lapte', 'Cartofi', 'Castraveti', 'Rosii'];

//1.1 Array copy (for final displaying)
let listaInitiala = [...listaCumparaturi];

// 2. Sort function
function sorteazaAlfabetic() {
    listaCumparaturi.sort();
    console.log("Lista sortată:", listaCumparaturi);
}
sorteazaAlfabetic()

// 3. Search function (+error mesage)
function cautaProdus(produs){
    const index = listaCumparaturi.indexOf(produs)
    if (index !== -1){
      console.log(`Produsul "${produs}" este al ${index+1}-lea in lista.`)
    }
    else {
      console.error(`Produsul "${produs}" nu a fost gasit in lista de cumparaturi.`)
    }
}

// 4. Add fuction (+error mesage)
function adaugaProdus(produs) {
  if (listaCumparaturi.indexOf(produs)=== -1){
    listaCumparaturi.push(produs);
    console.log(`Produsul "${produs}" a fost adaugat in lista.`)
  }
  else {
    console.error(`Produsul "${produs}" deja este in lista.`)
  }
}
// 5. Delete function (+error mesage)
function eliminaProdus(produs){
  const index = listaCumparaturi.indexOf(produs);
  if (index !== -1){
    listaCumparaturi.splice(index,1);
    console.log(`Produsul "${produs}" a fost eliminat din lista.`);
  }
  else {
    console.error(`Produsul "${produs}" nu a fost gasit in lista.`)
  }
}

//Functions call
cautaProdus('Oua')
cautaProdus('Torta')
adaugaProdus('Torta')
adaugaProdus('Piine')
adaugaProdus('Oregano')
adaugaProdus('Peste')
eliminaProdus('Piine')
eliminaProdus('Ardei')
eliminaProdus('Cartofi')

//Displaying the results
console.log('Lista initiala:',listaInitiala)
console.log('Lista finala:',listaCumparaturi)