const max = parseInt( prompt("enter the max number") );

const random = Math.ceil(Math.random() * max);

let guess = prompt("guess the number or type quit");

while(guess != "quit")
{

    guess = parseInt(guess);

    if(guess == random)
    {
        console.log("you are right! congrats!! random number was", random);
        break;
    }
    else if(guess < random){
          guess = prompt("Too small! please try again (or type 'quit')");
    }
    else{
        guess = prompt("Too large! please try again (or type 'quit')");
    }
}