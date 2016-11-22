$(document).ready( function() {
 function playNote(note_letter) {
   // Audio tag is formatting like ex: "aAudio"
   var audio = $("#" + note_letter + "Audio")[0];
   audio.currentTime = 0;
   audio.play();
 }

 // Selector for any element with note class
 $(".note").click(function(){
   // HTML contains the specific note
   var note = $(this).html();

   playNote(note);
 });

 // Logic for keys
 $(this).keydown(function(e) {
    // Ensure that it is in the range of a-g
    if (e.which >= 65 && e.which <= 71) {
      var note = e.key;
      playNote(note);
    } else {
      console.log("Stop pressing weird keys!");
    }
 });

});
