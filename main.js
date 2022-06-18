// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHeart = document.querySelectorAll('.like-glyph');
const errorModel = document.querySelectorAll('.hidden')[0];


emptyHeart.forEach(heart => {
  heart.addEventListener('click',onEmptyHeartClick)
});

function onEmptyHeartClick(event){
   mimicServerCall().
   then(response=>{
    //alert(`This is the response I received ${response}`) -- test for a successful response.
    event.target.textContent = FULL_HEART;         //adds the fullheart after a successful response.
    event.target.classList.add('activated-heart');
   })
   .catch(error=>{
    errorModel.classList.remove('hidden');
    errorModel.querySelector('p').textContent = error;
    setTimeout(() => {
      errorModel.classList.add('hidden');
    }, 3000);
   })
  //alert(' This is an empty heart that has been clicked.')  - test for correct grabbing of the html Element.
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
