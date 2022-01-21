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
    //Clear input
    $('#number').val('');
    $('#name').val('');
    //Start form and clear previous results
    $('#cloud-form').show();
    $('button#start').hide();
    $('#result').hide();
    $('#result').empty();
    //Stop cloud animation
    $('.cloud').removeClass('shake');
  });

  $('form#form').submit(function(event) {
    event.preventDefault();
    //Show results
    $('#cloud-form').hide();
    $('#result').show();
    $('button#start').show();
    $('.cloud').addClass('shake');
    //Save input
    const number = $('#number').val();
    const name = $('#name').val();
    
    beepBoop(number, name).forEach(function(number, index) {
      setTimeout(function(){
        $('ul#result').append('<li>' + number + '</li>');
      }, index * 800);
    });
  });
})