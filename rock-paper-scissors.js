// const score = {
    //  wins: 0,
    //  losses: 0 ,
    //  ties : 0 
    // };

    let score = JSON.parse(localStorage.getItem('score')) ||{
      wins : 0 ,
      losses :0 ,
      ties : 0

   };

   /* it save after the refresh also but we want to reset after the reset score  so in button  */
    updateScoreElement();
  
  /* if(!score){
   score = {
      wins : 0 ,
      losses :0 ,
      ties : 0

   };
  }
  */
    /*setInterval set the interval of random select of   computer play and it take's two parameter ( fun ,   milisec)  */
   let isAutoPlaying = false;
   let inetervalId;

   function autoPlay() {

     if(!isAutoPlaying){

        inetervalId = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
        } , 1000 );
        isAutoPlaying = true ;

     }
    else{
        clearInterval(inetervalId);
        isAutoPlaying = false;
     }
    
   }

   function playGame(playMove){

     const computerMove = pickComputerMove();
     //  console.log(computerMove);
   
    let result ='';
    if(playMove === 'scissors'){

       if ( computerMove === 'rock' ){
           result = 'You Lose';
       }
       else if( computerMove === 'paper'){
         result = 'You Win';
       }
       else if( computerMove === 'scissors'){

       result = 'Tie';
       }

     } 
   else  if( playMove === 'rock'){

         if ( computerMove === 'rock' ){
             result = 'Tie';
         }
         else if( computerMove === 'paper'){
           result = 'You Lose';
         }
        else if( computerMove === 'scissors'){

         result = 'You Win';
       }

    }
    else  if( playMove === 'paper'){

       if ( computerMove === 'rock' ){
         result = 'You Win';
       }
       else if( computerMove === 'paper'){
         result = 'Tie';
       }
      else if( computerMove === 'scissors'){
        result = 'You Lose';
        }

    }
     
    if(result === 'You Win'){
     score.wins += 1;

    }
    else if(result === 'You Lose'){
     score.losses +=1;

    }
    else if(result === 'Tie'){
     score.ties += 1;

    }

    localStorage.setItem('score' , JSON.stringify(score));
    /*  
    localstorage only support string so  it covert js object into a json string  and 'score '  is name  */

    /* queryselector select one elemnt to select all use all */

    updateScoreElement();
    document.querySelector('.js-result').innerHTML= result;

      document.querySelector('.js-moves').innerHTML= `You
        <img src="images/${playMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer `;  

   }   
      
    function updateScoreElement(){
     document.querySelector('.js-score')
      .innerHTML = `wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties} ` ;
  

    }

     function pickComputerMove(){
       let computerMove ='';

       const randomNumber = Math.random();
     
       if(randomNumber >= 0 && randomNumber < 1/3 ){
         computerMove = 'rock';
       }
       else  if(randomNumber >= 1/3 && randomNumber < 2/3 ){
         computerMove =  'paper';
       }
       else  if(randomNumber >= 2/3 && randomNumber < 1 ){
           computerMove =  'scissors';
       }

       return computerMove;

     }
