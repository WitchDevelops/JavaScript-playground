let aliensP = document.getElementById("aliens");
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
aliensP.innerHTML = aliens; 

 let greetAliens = (names) => {
   for (alienName in names) {
     //console.log(`Oh powerful ${names[alienName]}, we humans offer our unconditional surrender!`);
 };
}
greetAliens(aliens);

 
//and here using forEach
let greetAliensEach = (names) => {
     names.forEach((element) => console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`));
  console.log("klik");
}
let btnGreet = document.getElementById("greet");
btnGreet.addEventListener("click", greetAliensEach(aliens));