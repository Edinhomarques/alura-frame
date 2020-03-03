let inputs = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
]

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const trElement = document.createElement('tr');
  const tbody = document.querySelector('table tbody')
  inputs.forEach((campo) => {
    let tdElement = document.createElement('td')
    tdElement.textContent = campo.value
    trElement.appendChild(tdElement)
    
  })
  var tdVolume = document.createElement('td')
  
  tdVolume.textContent = inputs[1].value * inputs[2].value;
  trElement.appendChild(tdVolume)
  tbody.append(trElement)

  inputs[0].value = '';
  inputs[1].value = 1;
  inputs[2].value = 0;
  inputs[0].focus()


})