// Business Logic

function beepBoop(input) {
	let number = parseInt(input);
  const array = [];

  for (let i = 0; i <= number; i++) {
    array.push(i)
  }

  if (number.toString().includes(3)) {
  	number = "Won't you be my neighbor?";
  } else if (number.toString().includes(2)) {
    number = "Boop!";
  } else if (number.toString().includes(1)) {
    number = "Beep!";
  }

  return array;
}