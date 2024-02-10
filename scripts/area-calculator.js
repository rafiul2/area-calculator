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
}