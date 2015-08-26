$(document).ready( function() {
 function playNote(note_letter) {
   var audio_tag = document.getElementById(note_letter + "Audio");
   audio_tag.currentTime = 0;
   audio_tag.play();
 }

 $(".note").click(function(){
   // get the associated class
   var class_name = $(this).attr("class");
   var note = class_name.charAt(class_name.length - 1);

   playNote(note);
 });

 $(this).keypress(function(e) {
    var key_code = e.which;
    if (key_code > 96 && key_code < 104) {
      var note = String.fromCharCode(e.which);
      playNote(note);
    } else {
      alert("Stop pressing weird keys!");
    }
 });

});
