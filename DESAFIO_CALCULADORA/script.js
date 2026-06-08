const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let previousInput = '';
let operation = null;
let resetDisplay = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const id = button.id;

    if (id === 'limpar') {
      clearAll();
      return;
    }

    if (id === 'calcular') {
      if (operation && previousInput !== '') {
        calcular();
        operation = null;
      }
      return;
    }

    if (button.classList.contains('operator')) {
      handleOperator(id);
      return;
    }

    if (value !== null) {
      handleNumber(value);
    }
  });
});


function handleNumber(value) {
  if (resetDisplay) {
    currentInput = '';
    resetDisplay = false;
  }

  // Evita múltiplos pontos no mesmo número
  if (value === '.' && currentInput.includes('.')) return;

  // Substitui o '0' inicial pelo número digitado, a menos que seja um '.'
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay(currentInput);
}

// Função para processar os operadores
function handleOperator(operatorId) {
  if (operation && previousInput !== '' && !resetDisplay) {
    calcular();
  }

  previousInput = currentInput;
  operation = operatorId;
  resetDisplay = true; // Próximo número digitado irá limpar o display
}

function calcular() {
  let result = 0;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;


// Poderia fazer uma função para cada operação, mas preferi testar esse switch
  switch (operation) {
    case 'add':
      result = prev + current;
      break;
    case 'sub':
      result = prev - current;
      break;
    case 'mult':
      result = prev * current;
      break;
    case 'div':
      if (current === 0) {
        display.value = "Erro";
        clearAll();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  // Essa linha a baixo garante que não tera arredondamento e passa o resultado para String.
  currentInput = String(Math.round(result * 100000000) / 100000000);
  previousInput = '';
  updateDisplay(currentInput);
  resetDisplay = true;
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operation = null;
  resetDisplay = false;
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  display.value = value;
}
