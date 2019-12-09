function getDogImage(num = 3){
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
  .then(response => response.json())
  .then(responseJson =>
      displayResults(responseJson, num))
  .catch(error => alert('not right!'));


}

function displayResults(responseJson, x) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results').html('')
  for(let i = 0; i < x; i ++ ) {
  $('.results').append(
    `<img src="${responseJson.message[i]}" class="imgs-results" alt = "random dogs">`
  )
  }
  //display the results section
  $('.results').removeClass('hidden');
}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let x = $(`input[class = "inp"`).val();

    if( x > 50){
      x = 50
    };
    
    getDogImage(x); 
  });
}

function hold() {
   
    $(watchForm);
}

$(hold);