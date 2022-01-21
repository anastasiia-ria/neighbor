// Business Logic

function beepBoop(input) {
	let number = parseInt(input);
  if (number.toString().includes(1)) {
  	number = "Beep!";
  } else if (number.toString().includes(2)) {
    number = "Boop!";
  } else if (number.toString().includes(3)) {
    number = "Won't you be my neighbor?";
  }

  return number;
}