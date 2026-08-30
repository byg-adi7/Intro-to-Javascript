 let result;
 
  
    const scores=JSON.parse(localStorage.getItem('scores'))
    ||{
    numberOfGames: 0,
      playerWins: 0,
      computerWins: 0,
      ties: 0
    }
    update();
    

    
      function computerchoice(){
        const choices  = ["Rock", "Paper", "Scissors"];
        const randoomIndex = Math.floor(Math.random()*3);
        
        return choices[randoomIndex];
        
      }
      function displaycompchoice(choice){
        let emoji = ['✊','🖐️','✌️'];
        let index;
          let comp =document.querySelector('.js-compchoice');
       
      
        if(choice ==='Rock'){
          index = 0;
          comp.classList.remove('compsciss','comppaper')
          comp.classList.add('comprock');

        }
        else if(choice ==='Paper'){
          index = 1;
          comp.classList.remove('comprock','compsciss')
          comp.classList.add('comppaper')
        }
        else{
          index = 2;
          comp.classList.remove('comprock','comppaper')
          comp.classList.add('compsciss')
        }
      
        comp.innerHTML = emoji[index];
      }

      function update(){
        document.querySelector('.displayscores').innerText = 
        `Number of games = ${scores.numberOfGames}
        Player wins = ${scores.playerWins}
        Computer wins = ${scores.computerWins}
        Ties = ${scores.ties}` ;

      }
      
      function computewinner(playerchoice,choice){
      scores.numberOfGames++;
      let results;

        if(playerchoice===choice){
          scores.ties++;
          results =  "It's a tie!";

        } else if(
          (playerchoice==="Rock" && choice==="Scissors") ||
          (playerchoice==="Paper" && choice==="Rock") ||
          (playerchoice==="Scissors" && choice ==="Paper")
        ){
          scores.playerWins++;
          results =  "You win!";
        } else {
          scores.computerWins++;
          results =  "Computer wins!";
        }
        document.querySelector('.displaywinner').innerText = `${results}`;
        update();
        localStorage.setItem('scores',JSON.stringify(scores));
      return results;
      }