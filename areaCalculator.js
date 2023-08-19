function calculateTriangleArea() {
    //triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = baseField.value;
    const base = parseFloat(baseValue);



    //get triangle Height
    const heightField = document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);


    const area = (base * height) / 2;
  

    //show triangle area
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;
    addToCalculationEntry('Triangle',area);
}

function calculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue);


    //get rectangle height
    const heightField = document.getElementById('rectangle-length');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);


    const area = width * height;


    //show rectangle area
    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;

    addToCalculationEntry('Rectangle',area);

}
//reusable grt input function

function calculateParallelogramArea(){
    const base=getInputValue('parallelogram-base');
    const height=getInputValue('parallelogram-height');
    const area=base*height;
    setElementInnerText('parallelogram-area',area);
    addToCalculationEntry('Parallelogram',area);
}
function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputFieldValue=inputField.value; 
    const value=parseFloat(inputFieldValue);
    return value;
}


function calculateEllipseArea(){
    const majorRadius=getInputValue('ellipse-major');
    const minorRadius=getInputValue('ellipse-minor');
    const area=(Math.PI * majorRadius * minorRadius).toFixed(2);
    setElementInnerText('ellipse-area',area);
    addToCalculationEntry('Ellipse',area);
}


//reusable set span
function setElementInnerText(elementId, area){
    const element =document.getElementById(elementId);
    element.innerText=area;

}

//Add to calculation library
function addToCalculationEntry(areaType,area){
    const calculationEntry=document.getElementById('calculation-entry');
    const count=calculationEntry.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML=`${count+1}.${areaType} : ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}