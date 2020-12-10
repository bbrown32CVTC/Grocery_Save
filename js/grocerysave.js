//Grocery Save - Interactive Story
/*This interactive story is designed to have the user select three different times 
  which direction the character should take in order to get away from zombies while 
  bringing groceries home. Losing bags of groceries decreases the value of their reward
  at the end of the game. Returning with no groceries results in starvation.
*/


function DirectionToTake (direction, routeCounter) {
  var droppedBags  = 0;
  var message = "";
  routeCounter = Number(routeCounter);
  
  //Amount of bags lost and additional story line dependent on user choice
  switch (routeCounter) {
    case 2:
      if (direction === "left") {
        droppedBags = 2;
        message = "You chose to juke " + direction + ". You tripped because your shoe was untied! You had to use both hands in order to fight them off and get to safety.";
        alert(message);
        message += "</p>";
      } else if (direction === "right") {
        droppedBags = 0;
        message = "You chose to juke " + direction + ". Your juke move worked like magic! A zombie tripped and fell into the other two zombies causing them all to fall to the ground. You did not lose any grocery bags.";
        alert(message);
        message += "</p>";
      } else {
        droppedBags = 1;
        message = "You chose to juke " + direction + ". The zombies closed in and you had no where you could run. You lost a grocery bag during the completion of your roundhouse kick to the zombie’s chest to get away.";
        alert(message);
        message += "</p>";
      }
      break;

    case 1:
      if (direction === "left") {
        droppedBags = 0;
        message = "You chose to slide " + direction + ". You found a baseball bat! You were able to get away after using the zombies for batting practice. The bat broke upon impact.";
        alert(message);
        message += "</p>";
      } else if (direction === "right") {
        droppedBags = 1;
        message = "You chose to slide " + direction + ". You lost a grocery bag while using it to knock down the zombie to get away.";
        alert(message);
        message += "</p>";
      } else { 
        droppedBags = 0;
        message = "You chose to slide " + direction + ". You got away by dashing between the zombies. You did not lose any grocery bags.";
        alert(message);
        message += "</p>";
      }
      break;

    case 0:
      if (direction === "left") {
        droppedBags = 0;
        message = "You chose to go " + direction + ". You were lucky to get away with a little bit of zombie slobber on your arm, but you did not lose any grocery bags.";
        alert(message);
        message += "</p>";
      } else if (direction === "right") {
        droppedBags = 0;
        message = "You chose to go " + direction + ". You luckily got away without being bitten! You did not lose any grocery bags.";
        alert(message);
        message += "</p>";
      } else {
        droppedBags = 1;
        message = "You chose to go " + direction + ". You walked right into the zombie! It nearly bit your neck while you were in its grasp. You dropped one of your grocery bags while trying to get away.";
        alert(message);
        message += "</p>";
      }
      break;
  }
  
  return {
    droppedBags,
    message
  }; 
}

//Calculate the remaining bags
function CalculateRemainingBags (bagsRemoved, groceryBags) {
  var bagsLeft = 0;
  bagsRemoved = Number(bagsRemoved);
  groceryBags = Number(groceryBags);
  
  bagsLeft = (groceryBags - bagsRemoved);
  return bagsLeft;
}

function Main () {
  var completionMessage = "";
  var inputDirection = "";
  var lostBags = 0;
  var output = "";
  var rewardCount = "";
  var rewardEarned = "";
  var remainingBags = 3;
  var storyPiece = [];
  
  //Tells the pieces of the story to the user and saves output for ending
  alert('Welcome to the "Grocery Save" interactive zombie story game!'); 
  output = "You are on your way home with three bags of groceries during a zombie apocalypse. You will starve if you return home without any bags of groceries, so you need to choose your route home carefully. You have three tries for success. Let’s begin!";
  alert(output);
  output = "<p>" + output + "</p>";
  
  for (var loopCounter = 0; loopCounter < 3; loopCounter++) {
    switch (loopCounter){
      case 2:
        storyPiece.push("There are three zombies in front of your house. The only way to get away is by using your special ‘spin and juke’ sports move. You complete the spin and now you need to determine which direction to juke. ");
        alert(storyPiece[2]);
        output += "<p>" + storyPiece[2];
        break;
      case 1:
        storyPiece.push("You’re running as fast as possible and jump over a fence. Now you notice two zombies standing in the yard. They’re drooling blood and are headed towards you with their arms open. ");
        alert(storyPiece[1]);
        output += "<p>" + storyPiece[1];
        break;
      case 0:
        storyPiece.push("You see a zombie coming down the street headed directly towards you. ");
        alert(storyPiece[0]);
        output += "<p>" + storyPiece[0];
        break;
    }
    
    //Prompt the user for direction. Advise a retry if no match.
    var responseRequired = true;
    while (responseRequired){
      inputDirection = prompt("Would you like to go left, right, or straight?");
      inputDirection = inputDirection.toLowerCase();
      
      if (inputDirection !== "left" && inputDirection !== "right" && inputDirection !== "straight") {
        alert("You did not select left, right, or straight. Please try again");
      } else {
        //Run function for direction chose
        rewardCount = DirectionToTake(inputDirection, loopCounter);
        lostBags = Number(rewardCount.droppedBags);
        output += rewardCount.message;
        
        //Run function to calculate remaining bags
        remainingBags = CalculateRemainingBags(lostBags, remainingBags);
        remainingBags = Number(remainingBags);
        responseRequired = false;
      }
    }
  }
  
  //Determine which reward is earned from the story
  switch (remainingBags) {
    case 3:
      rewardEarned = "Gold";
      break;
    case 2:
      rewardEarned = "Silver";
      break;
    case 1:
      rewardEarned = "Copper";
      break;
    case 0:
      rewardEarned = "Starvation";
      break;
    default: rewardEarned = "Starvation";
  }

  //Add to the output message with a message based on the reward earned
  if (remainingBags > 0 && remainingBags !== 1) {
    completionMessage = "Congratulations! You successfully made it home with " + remainingBags + " grocery bags. You earned the " + rewardEarned + " reward for your effort!";
    alert(completionMessage);
    output += "<p>" + completionMessage + "</p>";
  } else if (remainingBags === 1) {
    completionMessage = "Congratulations! You successfully made it home with " + remainingBags + " grocery bag. You earned the " + rewardEarned + " reward for your effort!";
    alert(completionMessage);
    output += "<p>" + completionMessage + "</p>";
  } else {
    completionMessage = "Oh no! You made it home with zero bags of groceries. You earned the " + rewardEarned + " reward for your effort!";
    alert(completionMessage);
    output += "<p>" + completionMessage + "</p>";
  }
  
  document.write(output);
}

function PlayGrocerySave () {
  var play = true;
  var playAgain = "";
  
  while (play) {
    
    //Run the function to start the game
    Main();
    
    //Asks the user if they would like to play again and changes answer to all lowercase
    playAgain = prompt("Would you like to play again? Input yes or no");
    playAgain = playAgain.toLowerCase();
    
    if (playAgain !== "yes" && playAgain !== "no") {
      alert("You did not select yes or no. Game Over");
      play = false;
    } else if (playAgain === "no") {
      play = false;
    } 
  }
}

//Runs the startup function
PlayGrocerySave ();
