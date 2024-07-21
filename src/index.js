console.log('I am a part of dev.now');

function some_function(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
}

function getJoke() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('jokeId').innerText= data.value;
    // document.getElementById('jokeId').= data.icon_url;
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
  


}



