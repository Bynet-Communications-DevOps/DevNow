console.log('Script Loaded...');
console.log('Welcome to Dev.Now color blidness test');


function some_function(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
}