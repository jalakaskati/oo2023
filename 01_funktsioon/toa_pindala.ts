let klaviatuur=require("readline-sync")
let pikkus:number=klaviatuur.question("Palun sisesta toa pikkus meetrites:");
let laius:number=klaviatuur.question("Palun sisesta toa laius meetrites:");

function pindala(pikkus:number, laius:number):number{
	return pikkus*laius;
}
 console.log(pindala(pikkus, laius));
