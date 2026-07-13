// Declaring the variables required for the game making
let attemptsDONE = 0;
let RandomNumber = Math.floor(Math.random() * 25 + 1);
console.log(RandomNumber);
const IntroPage = document.getElementById("introPage");
const ContinueIntro = document.getElementById("Cont-intro");
const Guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const attemptsTEXT = document.getElementById("attempts");
const hint = document.getElementById("hint");
// Adding event listeners to the game
ContinueIntro.addEventListener("click", function(){
    IntroPage.style.display = "none";
});
submit.addEventListener("click", checkguess);

Guess.addEventListener('input', function(e){
    this.value = this.value.replace(/[^\d]/g, '');
   if ( Guess.value !== ""){
    if (Number(Guess.value) > 25){
        Guess.value = 25
        hint.textContent = "Maximum number allowed is 25";
    }
    else  if ( Number(Guess.value) ===0){
        Guess.value = "";
        hint.textContent = " Number must be atleast 1!";
    }
    }
})
function checkguess() {
    const userValue = Number(Guess.value);
if (userValue < 1){
    hint.textContent = "Please input the number within 1 and 25 inclusive!";
    return;
}
if (userValue > 25){
    hint.textContent = "Please input the number within 1 and 25 inclusive!";
    return;
}
    attemptsDONE++;
// Conditionals
 if (userValue == RandomNumber) {
    hint.textContent =
    "Congratulations!, you guessed it. What a beautiful brain <3"
 } else if (userValue<RandomNumber){
    hint.textContent = "Too low, try again!"
 } else{
    hint.textContent = "Too high, try again!"
 }
    attemptsTEXT.textContent = "Attempts: "+ attemptsDONE;
}