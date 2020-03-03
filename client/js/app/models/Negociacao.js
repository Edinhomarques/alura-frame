/**Trabalhando com classe */

class Negociacao {
  constructor(date, amount, valueMoney){
    //propriedades privadas add _nomeDaPropriedade
    this._date =  new Date(date.getTime());;
    this._amount = amount;
    this._valueMoney = valueMoney; 
    Object.freeze(this)
  }

  get volume() {
    return this._amount * this._valueMoney
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get amount() {
    return this._amount
  }

  get valueMoney(){
    return this._valueMoney
  }


}