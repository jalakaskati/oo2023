/*Vajalikud arvutused sõpradega einestamisel*/

class restoran{
    constructor(protected arve:number, protected inimesi:number){}
 
     jootraha():number{
         return this.arve*0.2;
     }
 
     minuArve():number{
         return this.arve/this.inimesi;
     }
 
     minuJootraha():number{
         return this.jootraha()/this.inimesi;
     }
 }
 
 let esimeneArve:restoran= new restoran(200,2);
 console.log ("Soovituslik jootraha summa: "+esimeneArve.jootraha()+"€");
 console.log ("Sina pead arve võrdsel jagamisel tasuma: "+esimeneArve.minuArve()+"€");
 console.log ("Sina pead (soovitusliku jootraha) võrdsel jagamisel jätma jootraha: "+esimeneArve.minuJootraha()+"€");
