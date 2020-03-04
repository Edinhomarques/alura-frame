class NegociacaoController {
  constructor(){
    // Quer dizer que o queryselector vai pro $ mas ainda mantem associação com o document
    // Graças ao bind
    let $ = document.querySelector.bind(document);
    this._inputAmount = $('#quantidade');
    this._inputDate = $('#data');
    this._inputValue = $('#valor');
  }

  adicionar(event){
    event.preventDefault();
    //let Helper = new DateHelper();

    let negociacao = new Negociacao(
      DateHelper.textForDate(this._inputDate.value), 
      this._inputAmount.value, 
      this._inputValue.value
      /*Forma alternativa
        new Date(...  
          this._inputData.value.split('-')
          .map( (item, indice) => item - indice % 2)
        )
      */
    );// end negociacao
    console.log(DateHelper.dateForText(negociacao.date));

    
  }

}