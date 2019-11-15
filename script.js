function getDogImages(num=3){
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson =>
      displayImages(responseJson,num))
    .catch(error => 'Something went wrong! Try again later!')
  }
  
  function displayImages(responseJson, x){
  console.log(responseJson)
  $('.results').html('');
  for(let i=0;i<x;i++){
  $('.results').append(`<img src='${responseJson.message[i]}' class='img-results' alt='random dogs'>`)
  
  $('.results').removeClass('hidden');
    }
  }
  
  function formWatch (){
    $('form').submit(event =>{
      event.preventDefault();
      let x = $(`input[class='num']`).val();
      getDogImages(x);
    });
  }
  
function appRunner(){
    console.log('App is loaded, waiting on submit')
    formWatch();
}

$(appRunner);