// Business Logic

function beepBoop(input) {
	let number = parseInt(input);
  const array = [];

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      array.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      array.push("Boop!");
    } else if (i.toString().includes(1)) {
      array.push("Beep!");
    } else {
      array.push(i)
    }
  }

  return array;
}