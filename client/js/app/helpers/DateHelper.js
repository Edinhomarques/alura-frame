class DateHelper {
  constructor() {
    throw new Error('DATEHELPER NÃO PODE SER INSTANCIADA');
  }

  static dateForText(data){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  }

  // são metodos q invocamos diretamente na classe, não precisamos de uma instancia
  static textForDate(text){
    return  new Date(text.split('-'))
  }

 
}