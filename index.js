let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}

function backspace() {
  calculation = calculation.slice(0, -1);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function clearCalculation() {
  calculation = '';
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function percentCalculation() {
  let match = calculation.match(/(\d+\.?\d*)$/);
  if (match) {
    let number = match[0];
    let percentValue = parseFloat(number) / 100;
    calculation = calculation.slice(0, -number.length) + percentValue;
    document.querySelector('.js-calculation').innerHTML = calculation + " %";
    localStorage.setItem('calculation', calculation);
  }
}