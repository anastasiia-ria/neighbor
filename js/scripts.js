// Business Logic

function beepBoop(input, name) {
	let number = parseInt(input);
  const array = [];

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      array.push("Won't you be my neighbor, " + name + "?");
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

//UI Logic
$(document).ready(function(){
  $('button#start').click(function (){
    $('#cloud-form').show();
    $('button#start').hide();
    $('#result').hide();
    $('#number').val('');
    $('#name').val('');
  });

  $('form#form').submit(function(event) {
    event.preventDefault();
    console.log("Here");
    $('#result').empty();
    $('#cloud-form').hide();
    $('#result').show();
    $('button#start').show();
    
    const number = $('#number').val();
    const name = $('#name').val();

    beepBoop(number, name).forEach(function(number, index) {
      setTimeout(function(){
        $('ul#result').append('<li>' + number + '</li>');
      }, index * 1200);
    });
  });
})