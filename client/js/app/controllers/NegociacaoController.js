class NegociacaoController {
  constructor(){
    // Quer dizer que o queryselector vai pro $ mas ainda mantem associação com o document
    // Graças ao bind
    let $ = document.querySelector.bind(document);
    this._inputAmount = $('#quantidade');
    this._inputDate = $('#data');
    this._inputValue = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    this._negociacoesView.update(this._listaNegociacoes);
  }

  adicionar(event){
    event.preventDefault();
    //let Helper = new DateHelper();

    this._listaNegociacoes.add(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes); 
    this._limpaFormulario();
  }
  _criaNegociacao(){
    return new Negociacao(
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
  }
  _limpaFormulario(){
    this._inputDate.value = '';
    this._inputAmount.value = 1;
    this._inputValue.value = 0.0;

    this._inputDate.focus();
  }

}