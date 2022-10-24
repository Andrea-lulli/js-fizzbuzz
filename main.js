// // Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
//i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// let Numeri = document.getElementById("numeri"); 



for (let i = 0; i < 100; i++) {

  let divNuovo = document.createElement("div");
  divNuovo.classList.add("box-js");
  
  

   if ( i % 3 === 0 ){
    
     divNuovo.innerHTML += "Fizz" ;
     divNuovo.classList.add("red")
     console.log(divNuovo); 
    
   } else if ( i % 5 === 0 ) {
    divNuovo.innerHTML  += "Buzz";
    divNuovo.classList.add("yellow")
    console.log(divNuovo); 

   } else if ( i % 3 === 0 && i % 5 === 0 ) {
    divNuovo.innerHTML  += "FizBuzz";
    console.log(divNuovo); 

   } else {
    divNuovo.innerHTML  += i;
    console.log(divNuovo); 

   } 

   
   document.getElementById("numeri").append(divNuovo);


}












