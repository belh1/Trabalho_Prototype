import IPrototype from "../Prototype/IPrototype";

import VehiclePrototype from "./VehiclePrototype";


export default class FiatPrototype extends VehiclePrototype{

    protected FiatPrototype(fiat_Prototype: FiatPrototype){
        this.Model=this.Model;
        this.Year=this.Year;
        this.Category=this.Category;
        this.Cor=this.Cor;

    }
    clone(): FiatPrototype{
        const novo = new FiatPrototype(this.Model,this.Year,this.Category,this.Cor);
        return novo;
    }
}