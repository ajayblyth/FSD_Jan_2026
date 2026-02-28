let favMovie="jurrasic park";

let guess = prompt('Guess the movie name or if you dont want to play type quit');

while( (guess !== favMovie) && (guess !== 'quit'))
{
    guess = prompt('Your guess is wrong please try again or you can quit');
}

if(guess === favMovie)
{
    console.log("Congrats your guess is right! ")
}