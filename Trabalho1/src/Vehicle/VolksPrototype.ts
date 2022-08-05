
import VehiclePrototype from "./VehiclePrototype";

export default class VolktPrototype extends VehiclePrototype{

    //use protected para que o construtor possa ser acessível pelas classes que extendem sua classe mae,no caso Car.
    protected VolktPrototype(volks_Prototype: VolktPrototype){
        this.Model=this.Model;
        this.Year=this.Year;
        this.Category=this.Category;
        this.Cor=this.Cor;

    }
    clone(): VolktPrototype{
        //cria um novo objeto
        const novo = new VolktPrototype(this.Model,this.Year,this.Category,this.Cor);
        return novo;
    }
}
