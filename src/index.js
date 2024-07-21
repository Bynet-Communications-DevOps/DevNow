console.log('I am a part of dev.now');

function some_function(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
}

function joke(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response=>response.json())
  // .then(data=>console.log(data.value))
  .then(data=>{
    document.getElementById("joke").innerHTML = data.value;
  })
  .catch(error=>console.error('Error:', error));

 }

