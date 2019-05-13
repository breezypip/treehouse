var color = prompt ("Name a color");
var animal = prompt ("Name an animal");
var toy = prompt ("Name a toy");
var person1 = prompt ("Name a person");
var song = prompt ("Name a song");
var instrument = prompt ("Name an instrument");
var shape = prompt ("Name a shape");
var food = prompt ("Name a food");
var bodyPart1 = prompt ("Name a body part");
var person2 = prompt ("Name a person");
var bodyPart2 = prompt ("Name a body part");
var dinosaur = prompt ("Name a dinosaur");
var bodyPart3 = prompt ("Name a body part");
var person3 = prompt ("Name a person");

alert ("Let's ready your story!");

var message = "Every morning Samantha the " + color + " " + animal;
message += " would wake up excited to start the day. <br> She would play with her " + toy;
message += " with " + person1 + ". <br> Samantha loved music and every day she played " + song;
message += " on her " + instrument + ". <br> On the best days her mommy would make her " + shape +  " " + food;
message += " for dinner. <br> Sometimes she spilled it all over her " + bodyPart1 + ". <br> At night ";
message += person2 + " would help her get ready for bed by brushing her " + bodyPart2;
message += " with toothpaste and putting her " + dinosaur + " pajamas on her " + bodyPart3;
message += ". <br> After she is tucked into bed she tells " + person3 + " that she knows tomorrow will be another great day."; 

document.write(message);