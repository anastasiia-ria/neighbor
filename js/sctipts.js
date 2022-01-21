// Business Logic

function beepBoop(input) {
	let number = parseInt(input);
  if (number === 1) {
  	number = "Beep!";
  } else if (number === 2) {
    number = "Boop!";
  } 

  return number;
}