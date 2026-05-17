let claw = document.getElementById("claw");
let x = 300;

let tokens = 5;
let losses = 0;

document.addEventListener("keydown", (e) => {

  if(e.key === "ArrowLeft"){
    x -= 20;
  }

  if(e.key === "ArrowRight"){
    x += 20;
  }

  claw.style.left = x + "px";

});

function dropClaw(){

  if(tokens <= 0){
    alert("No more tokens!");
    return;
  }

  tokens--;

  document.getElementById("tokens").innerText =
    "Tokens: " + tokens;

  claw.style.top = "350px";

  setTimeout(() => {

    claw.style.top = "0px";

    let winChance = Math.random();

    if(losses >= 2){
      winChance = 1;
    }

    if(winChance > 0.5){

      alert("YOU WON A NEE DOH!");

      losses = 0;

    } else {

      alert("Missed!");

      losses++;

    }

  }, 1000);

}
