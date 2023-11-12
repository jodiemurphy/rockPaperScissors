function rockPaperScissors(){
    var userChoice=document.getElementById("userChoice").value;
    const choices = ["rock","paper","scissors"];
    var randomNumber=Math.floor(Math.random() * 3);
    var computerChoice=choices[randomNumber];
    
    if(userChoice==computerChoice){
        alert("It was a draw! You both chose " +userChoice)
    }
    else if(userChoice=="rock" && computerChoice=="paper"){
        alert("You loose! Paper beats rock.")
    }
    else if(userChoice=="paper" && computerChoice=="rock"){
        alert("You win! Paper beats rock.")
    }
    else if(userChoice=="paper" && computerChoice=="scissors"){
        alert("You lose! Scissors beats paper.")
    }
    else if(userChoice=="scissors" && computerChoice=="paper"){
        alert("You win! Scissors beats paper.")
    }
    else if(userChoice=="scissors" && computerChoice=="rock"){
        alert("You lose! Rock beats scissors.")
    }
    else if(userChoice=="rock" && computerChoice=="scissors"){
        alert("You win! Rock beats scissors.")
    }
    else{
        alert("Invalid input. Please try again.")
    }

  
}