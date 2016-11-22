$(document).ready(function(){
  var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  for(var i = 0; i < keys.length; i++) {

    $('.note.' + keys[i]).click(function() {
      console.log($(this)); // Undefined why? keys[7] doesn't have a value!
    });

    // $('.note.' + keys[i]).click(function() {
    //   console.log($(this)); // will work and point to the correct button
    // });
  }
});
