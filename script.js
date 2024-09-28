let display = document.getElementById('display');

function addNumber(num) {
  display.value += num;
}

function addOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
