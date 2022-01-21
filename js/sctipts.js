// Business Logic

function beepBoop(input) {
	let number = parseInt(input);
  if (number === 1) {
  	number = "Beep!";
  } else if (number === 2) {
    number = "Boop!";
  } else if (number === 3) {
    number = "Won't you be my neighbor?";
  }

  return number;
}