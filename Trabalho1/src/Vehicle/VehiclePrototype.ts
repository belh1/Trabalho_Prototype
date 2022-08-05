import IPrototype from "../Prototype/IPrototype";


export default class VeiclePrototype implements IPrototype{
    private _model: string;
    private _year : number;
    private _category: string;
    private _cor: string;

    constructor(modelo :string, year : number,category : string, cor : string){
        this._model= modelo;
        this._year = year;
        this._category = category;
        this._cor = cor;
    }
    
    get Model() : string{
        return this._model;
    }

    set Model(values : string){
        this._model = values;
    }

    get Year() : number{
        return this._year;
    }

    set Year(values : number){
        this._year = values;
    }
    get Category() : string{
        return this._category;
    }

    set Category(values : string){
        this._category = values;
    }
    get Cor() : string{
        return this._cor;
    }

    set Cor(values : string){
        this._cor = values;
    }
    clonar():VeiclePrototype{
        const novo = new VeiclePrototype(this._model,this._year,this._category,this._cor);
        return novo;
    }
}
