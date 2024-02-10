function calculateTriangleArea(id){
  // get base value
  const baseField = document.getElementById(id);
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  // get height value 
  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  // Area calculation
  const area = 0.5 * base * height;

  // show triangle area
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;

};

// Rectangle
function calculateRectangleArea(){
  // get width
  const widthField = document.getElementById('rectangle-width');
  const widthFieldText = widthField.value;
  const width = parseFloat(widthFieldText);
  console.log(width);

  // get length
  const lengthField = document.getElementById('rectangle-length');
  const lengthFieldText = lengthField.value;
  const length = parseFloat(lengthFieldText);
  console.log(length);

  // calculate area
  const area = width * length;
  // set rectangle area
  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = area;
};

// Parallelogram
function calculateParallelogramArea(){
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');

  const area = base * height;
  // const areaSpan = document.getElementById('parallelogram-area');
  // areaSpan.innerText = area;
  setElementInnerText('parallelogram-area', area);
};

// ellipse
function calculateEllipseArea(){
  const majorRadius = getInputValue('ellipse-major-radius');
  const minorRadius = getInputValue('ellipse-minor-radius');

  const area = 3.14 * majorRadius * minorRadius;
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText('ellipse-area', areaTwoDecimal);
}
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
  
}