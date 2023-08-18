function calculateTriangleArea() {
    //triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = baseField.value;
    const base = parseFloat(baseValue);
    console.log(base);


    //get triangle Height
    const heightField = document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);
    console.log(height);

    const area = (base * height) / 2;
    console.log(area);

    //show triangle area
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;

}

function calculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue);
    console.log(width);

    //get rectangle height
    const heightField = document.getElementById('rectangle-length');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);
    console.log(height);

    const area = width * height;
    console.log(area);

    //show rectangle area
    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;


}