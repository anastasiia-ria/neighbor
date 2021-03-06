// Business Logic

function beepBoop(input, name) {
	let number = parseInt(input);
  const array = [];

  for (let i = 0; i <= number; i++) {
    let output = 0;
    if (i.toString().includes(3)) {
      output = "Won't you be my neighbor, " + name + '?';
    } else if (i.toString().includes(2)) {
      output = 'Boop!';
    } else if (i.toString().includes(1)) {
      output = 'Beep!';
    } else {
      output = i;
    }
    array.push(output);
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
    $('.clear').hide();
    $('#result').hide();
    $('#result').empty();
    //Stop cloud animation
    $('.cloud').removeClass('shake');
  });

  //Clear results button
  $('button#clear').click(function () {
    $('#result').empty();
    $('#result').hide();
    $('.clear').hide();
  });

  //Neighbor animation
  $('#neighbor').click(function () {
    $('#hello').toggle();
  });

  //Form submit button
  $('form#form').submit(function(event) {
    event.preventDefault();
    //Show results
    $('#cloud-form').hide();
    $('#result').show();
    $('button#start').show();
    $('.clear').show();
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
});