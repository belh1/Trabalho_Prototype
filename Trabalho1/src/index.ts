import FiatPrototype from "./Vehicle/FiatPrototype";
import VolktPrototype from "./Vehicle/VolksPrototype";

const volks = new VolktPrototype('Polo',2017,"passeio","preta");
const car1 = volks.clone();
car1.Cor="Branca";
const car2 = volks.clone();
car2.Model ="Jetta";
car2.Year=2020;
const fiat = new FiatPrototype('Argo',2011,"empresa","cinza");
const car3 = fiat.clone();
car3.Category="passeio";
car3.Year=2009;
const car4 = fiat.clone();
car4.Year=2001;
car4.Cor="branca"

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
