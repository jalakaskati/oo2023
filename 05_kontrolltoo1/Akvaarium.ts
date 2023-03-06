class akvaarium{
	protected veekogus:number=0;
    constructor(protected pikkus:number, protected laius:number, protected kõrgus:number){}
 
     ruumala():number{
		 this.veekogus= this.pikkus* this.laius* this.kõrgus;
         return this.pikkus* this.laius* this.kõrgus;
		 
		 /* 1ml=1kuupcm */
     }
 
      lisaVett(ml:number){
        this.veekogus= this.veekogus +ml;
      } 
 
     veeKogus(){
		console.log("Akvaariumis on " + this.veekogus + " milliliitrit vett");
     }
 }
 
 
 
let A1:akvaarium= new akvaarium(50,10,60);
console.log(A1.ruumala());
A1.lisaVett(500);
A1.lisaVett(800);
A1.veeKogus();
