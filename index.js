// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("I got cklicked");
// }

let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let i =0


// Detecting button press
for (i; i< numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
// accesing the the the letter of each drum if you take a look ath the index.html code you'll see.
  let buttonInnerHtml = this.innerHTML;

  makeSound(buttonInnerHtml);

  });
}

// Detecting keyboard press
document.addEventListener("keydown",function(event){
  makeSound(event.key)
});


function makeSound(key){

  // the sitch statment works a bit like the for loop, but it allows you to tagget specific things,
// inplace of the expression, we place the "switch" trigger

  switch (key) {      //switching on the different letters
    case "w":              //depending on the case we'll tell the loop to do something differn' ie add a differnt sound.
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;                //after the first case is done, the break statement tells the code to break out and contiue

    case "a":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

    case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

    case "j":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

    case "k":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

    case "l":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

    default: console.log(buttonInnerHtml);

  }
}
