function calculateTriangleArea(){
  const base = getInputValue('triangle-base');
  const length = getInputValue('triangle-height');
  const area = validateValue(base, length);
  setElementInnerText('triangle-area', area);
};

// Rectangle
function calculateRectangleArea(){
  const width = getInputValue('rectangle-width');
  const length = getInputValue('rectangle-length');
  const area = validateValue(width, length);
  setElementInnerText('rectangle-area', area);
};

// Parallelogram
function calculateParallelogramArea(){
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  const area = validateValue(base, height);
  setElementInnerText('parallelogram-area', area);
  addToCalculationEntry('parallelogram', area);
};

// ellipse
function calculateEllipseArea(){
  const majorRadius = getInputValue('ellipse-major-radius');
  const minorRadius = getInputValue('ellipse-minor-radius');
  const area = validateValue(majorRadius, minorRadius);
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText('ellipse-area', areaTwoDecimal);
};

// function: get input value field in number
function getInputValue(fieldId){
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  inputField.value = '';
  return value;
};

// function set value in span
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
};
// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic html
 * 2. create an element you want to add.
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic template string
 * 5. append the created element as child
 */
function addToCalculationEntry(areaType, area){
  console.log(areaType+ ' '+area);
  const calculationEntry = document.getElementById('calculation-entry');
  const count = calculationEntry.childElementCount;

  const p = document.createElement('p');
  p.classList.add('my-4');
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert to m<sup>2</sup></button>`;
  calculationEntry.appendChild(p)
};



// validation:
function validateValue(value1, value2){
  let area = 0;
  if(isNaN(value1)||isNaN(value2)){
    alert('provide number');
    return area;
  }
  else {
     area = value1 * value2;
  }
  return area;
};