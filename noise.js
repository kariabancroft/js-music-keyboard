$(document).ready( function() {
 function playNote(note_letter) {
   // Audio tag is formatting like ex: "aAudio"
   var audio_tag = document.getElementById(note_letter + "Audio");
   audio_tag.currentTime = 0;
   audio_tag.play();
 }

 // Selector for any element with note class
 $(".note").click(function(){
   // get the associated class
   var class_name = $(this).attr("class");

   // class name contains the specific note
   var note = class_name.charAt(class_name.length - 1);

   playNote(note);
 });

 // Logic for keys
 $(this).keypress(function(e) {
    // corresponds to the button press
    var key_code = e.which;

    // Ensure that it is in the range of a-g
    if (key_code > 96 && key_code < 104) {
      var note = String.fromCharCode(e.which);
      playNote(note);
    } else {
      alert("Stop pressing weird keys!");
    }
 });

});
