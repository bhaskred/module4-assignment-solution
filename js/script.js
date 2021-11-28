(function () {
var names = ["Yaakov", "John", "J Selva", "Cherry", "Tom"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toUpperCase();
  if (firstLetter == "J") {
    byeSpeaker.speak(names[i]);
  } 
  else {
    helloSpeaker.speak(names[i]);
  }
}
})();