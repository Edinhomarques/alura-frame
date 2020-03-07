class NegociacoesView {
  constructor(elemento) {
    this._elemento = elemento;

  }
  _template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>

      <tbody>
      ${
        model.negociacoes.map( negociation =>
          `<tr>
             <td>${DateHelper.dateForText(negociation.date)}</td>
             <td>${negociation.amount}</td>
             <td>${negociation.valueMoney}</td>
             <td>${negociation.volume}</td>
           </tr>`

      ).join('')}
      </tbody>
          
      <tfoot>
      <td colspan=3></td>
          <td>${
              model.negociacoes.reduce((total, crr) => total + crr.volume, 0)
          }</td>
          
      </tfoot>
    </table>
    `
  }

  update(model) {
    this._elemento.innerHTML = this._template(model);
  }
}