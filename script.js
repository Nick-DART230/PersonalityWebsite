let points1 = 0;
let points2 = 0;
let points3 = 0;
let points4 = 0;


let logoX; 

function setup() {
  createCanvas(600, 400);
  logoX = -300; 
}

function draw() {
  background(50, 120, 70); 

  drawLogo(logoX, height / 2); 

  logoX += 3;
  if (logoX > width + 300) {
    logoX = -300; 
  }
}

function drawLogo(x, y) {
  noStroke();

  fill(200, 0, 0);
  rect(x - 150, y - 40, 300, 80, 10);

  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255);
  textStyle(BOLD);
  text("TRAILER PARK BOYS", x, y);
}


console.log(points1,points2, points3, points4);

$("#Julian").hide();
$("#Ricky").hide();
$("#Bubbles").hide();
$("#Lahey").hide();

$("#button").on("click", changeHeading);
$("#buttonOne").hide();
$("#buttonTwo").hide();
$("#buttonThree").hide();
$("#buttonFour").hide();
$("#buttonOne").on("click", changeHeading);
$("#buttonTwo").on("click", changeHeading);
$("#buttonThree").on("click", changeHeading);
$("#buttonFour").on("click", changeHeading);

$("#buttonOne").on("click", points1Add);
$("#buttonTwo").on("click", points2Add);
$("#buttonThree").on("click", points3Add);
$("#buttonFour").on("click", points4Add);


function points1Add (){
    points1++;
    console.log("Points1: " + points1);
}
function points2Add (){
    points2++;
    console.log("Points2: " + points2);
}
function points3Add (){
    points3++;
    console.log("Points3: " + points3);
}
function points4Add (){
    points4++;
    console.log("Points4: " + points4);
}

function updateButtonText(buttonTexts) {
    $("#buttonOne").text(buttonTexts[0]);
    $("#buttonTwo").text(buttonTexts[1]);
    $("#buttonThree").text(buttonTexts[2]);
    $("#buttonFour").text(buttonTexts[3]);
}

function changeHeading() {
    $("#button").hide();
    $("#buttonOne").show(); 
    $("#buttonTwo").show();
    $("#buttonThree").show(); 
    $("#buttonFour").show();
    $("#heading").text("Question 1: what is your favorite thing to eat?");
    updateButtonText(["probably pepperoni, man. You can't go wrong with pepperoni. Like, you just grab it, eat it, no fancy crap. Plus, it's got protein or whatever.", "Steak. Medium rare. Goes great with a good drink. Gotta keep things classy, you know? Even in the park.", "I love me some grilled cheese sandwiches, boys. Perfectly toasted, with the cheese all gooey-like. It's simple, but it's freakin' amazing.", "Cheeseburgers...washed down with a good ol’ glass of liquor."]);
    $("#buttonOne").on("click", changeHeading2);
    $("#buttonTwo").on("click", changeHeading2);
    $("#buttonThree").on("click", changeHeading2);
    $("#buttonFour").on("click", changeHeading2);
}

function changeHeading2() {
    $("#heading").text("Question 2: What do you want most out of life?");
    updateButtonText(["Honestly? Just wanna live stress-free, and maybe not have the cops up my butt every five seconds. That’d be nice. ", "Money, security, and respect. Gotta take care of the people you care about, you know? Build something solid.", " I just want my kitties to be safe and happy. Maybe a little shed with a heater so they’re warm in the winter. That’s all I really need.", "Order in the park...and the sweet, soothing company of my old pal, the liquor. That’s all a man like me could ever need."]);
    $("#buttonOne").on("click", changeHeading3);
    $("#buttonTwo").on("click", changeHeading3);
    $("#buttonThree").on("click", changeHeading3);
    $("#buttonFour").on("click", changeHeading3);
}

function changeHeading3() {
    $("#heading").text("Question 3: There's some scuffle going on near you, whatcha doin?");
    updateButtonText(["Scuffle? I’m probably gonna step in, you know, and tell 'em to chill out before it gets messy. But if it gets too crazy, I’m outta there, man. Not worth getting caught in a fight with these idiots.", "Observe first, see who’s involved. If I can turn the situation into something beneficial for me or my crew, I’ll do it. Otherwise, I keep my distance and stay low.", "Aw, I’m stayin' outta that mess. I’m just gonna keep to myself, maybe sneak over to my shed and grab my cats so they don’t get spooked. No need for me to get involved in the chaos.", "Probably pretending it’s not happening and hoping it blows over. But if it gets outta hand, I might just have to call the police...or, you know, just distract myself with a drink."]);
    $("#buttonOne").on("click", changeHeading4);
    $("#buttonTwo").on("click", changeHeading4);
    $("#buttonThree").on("click", changeHeading4);
    $("#buttonFour").on("click", changeHeading4);
}

function changeHeading4() {
    $("#heading").text("Question 4: Pick a motto");
    updateButtonText(["Keep it real, keep it lazy, and never trust a cop!", "Stay sharp, stay focused, and always be ready to turn things to your advantage.", "Love your cats, keep it simple, and never stop believing in yourself!", "Order is a beautiful thing... but whiskey is better."]);
    $("#buttonOne").on("click", changeHeading5);
    $("#buttonTwo").on("click", changeHeading5);
    $("#buttonThree").on("click", changeHeading5);
    $("#buttonFour").on("click", changeHeading5);
}

function changeHeading5() {
    $("#heading").text("Question 5: What vehicle do you drive?");
    updateButtonText(["Man, I drive my sweet old Pontiac, the one that’s always on the verge of falling apart. But it runs, and that's all that matters! Plus, it’s got a wicked backseat for chillin'", "Got a classic black Lincoln Town Car. You know, it’s sleek, it’s smooth, and it gets me where I need to be, with style.", "I drive a little old shopping cart, well, it’s actually a minivan. Real comfy though, fits my cats and all my tools. I like it nice and cozy!", "I drive my trusty, beat-up old cop car. It’s a reminder of the days when I used to uphold order... before everything went to hell. Plus, it’s great for patrolling the park."]);
    $("#buttonOne").on("click", changeHeading6);
    $("#buttonTwo").on("click", changeHeading6);
    $("#buttonThree").on("click", changeHeading6);
    $("#buttonFour").on("click", changeHeading6);
}

function changeHeading6() {
    $("#heading").text("Question 6: What's your approach to problem-solving?");
    updateButtonText(["Problem-solving? You just wing it, man. Like, don’t overthink crap. Fix it with duct tape, swear a little, and hope for the best. Works most of the time!", "Stay calm, analyze the situation, and figure out how to make it work in my favor. Always have a plan, and if that doesn’t work, have a backup plan.", "I like to take it slow, you know, figure out what’s really wrong and then fix it with whatever I’ve got handy. Sometimes all you need is a screwdriver and a good idea!", "Problems are like drunks in the park—you deal with them head-on, one at a time. Or, if it’s too much, pour yourself a drink and let it sort itself out."]);
    $("#buttonOne").on("click", changeHeading7);
    $("#buttonTwo").on("click", changeHeading7);
    $("#buttonThree").on("click", changeHeading7);
    $("#buttonFour").on("click", changeHeading7);
}

function changeHeading7() {
    $("#heading").text("Question 7: What would you do with a sudden $10,000 windfall?");
    updateButtonText(["Ten grand? Easy, man. Buy a ton of pepperoni, and then party for a week straight. Gotta enjoy life!", "I’d invest it into something solid—start a small business, maybe expand the trailer park. Money like that has to work for you, not the other way around.", "Aw, I’d get a nice new shed for my kitties, with little hammocks and heaters for the winter. Maybe treat myself to a few model trains too.", "$10,000? That’s a lotta liquor. Maybe upgrade the liquor cabinet first, then use the rest to keep order in the park. But mostly liquor."]);
    $("#buttonOne").on("click", changeHeading8);
    $("#buttonTwo").on("click", changeHeading8);
    $("#buttonThree").on("click", changeHeading8);
    $("#buttonFour").on("click", changeHeading8);
}

function changeHeading8() {
    $("#heading").text("Question 8: What's your attitude toward the law?");
    updateButtonText(["The law? It’s a pain in my butt, man. It’s just there to mess with guys like me. If it wasn’t for stupid rules, I’d be fine.", "I respect the law... when it works in my favor. Otherwise, it’s just an obstacle to get around. Gotta do what you gotta do to survive.", "Aw, I try to keep my head down and avoid trouble. The law’s fine, I guess, as long as it’s not messin’ with me or my kitties.", "The law is the only thing keeping this park from descending into utter chaos. Without it, we’d be in a world of drunken anarchy...not that I’d mind too much."]);
    $("#buttonOne").on("click", changeHeading9);
    $("#buttonTwo").on("click", changeHeading9);
    $("#buttonThree").on("click", changeHeading9);
    $("#buttonFour").on("click", changeHeading9);
}

function changeHeading9() {
    $("#heading").text("Question 9: How do you spend most of your free time?");
    updateButtonText(["Free time? I’m either smoking, workin' on my grow-op, or hanging out with the boys. Maybe a bit of all three at once.", "I like to plan my next move, hit the gym, or just chill with a drink while figuring out how to make things better for me and my crew.", "Aw, I spend it with my kitties! Feedin’ ‘em, playin’ with ‘em, or fixin’ up their little houses. If I got time left, I’ll mess around with my model trains.", "Free time? What’s that? Between the park’s chaos and Randy’s cheeseburger obsession, there isn’t much of it. But when I get a moment, I’m enjoying a nice drink...or five."]);
    $("#buttonOne").on("click", changeHeading10);
    $("#buttonTwo").on("click", changeHeading10);
    $("#buttonThree").on("click", changeHeading10);
    $("#buttonFour").on("click", changeHeading10);
}

function changeHeading10() {
    $("#heading").text("Question 10: Whats your dream job?");
    updateButtonText(["Dream job? Don’t need one, man.", "I’d own a successful nightclub or a chain of legit businesses. Something that makes money, keeps me in control, and lets me live the life I want.", "I’d love to run a big ol' kitty sanctuary, with all the toys and comfy spots they could ever need. Plus, I’d get to spend all day with 'em!", "Dream job? I already had it—park supervisor. Keeping order, laying down the law... and, well, having the occasional drink while doing it."]);
     $("#buttonOne").on("click", finalScene);
    $("#buttonTwo").on("click", finalScene);
    $("#buttonThree").on("click", finalScene);
    $("#buttonFour").on("click", finalScene);
}

function finalScene() {
    
    if (points1 > points2 && points1 > points3 && points1 > points4){
        $("#buttonOne").hide();
        $("#buttonTwo").hide();
        $("#buttonThree").hide();
        $("#buttonFour").hide();
        $("#Ricky").show();
        $("#heading").text("You are Ricky");
        $("#animation").show();
       
}

 if (points2 > points1 && points2 > points3 && points2 > points4){
        $("#buttonOne").hide();
        $("#buttonTwo").hide();
        $("#buttonThree").hide();
        $("#buttonFour").hide();
        $("#Julian").show();
        $("#heading").text("You are Julian");
        $("p").hide();
        $("div").hide();
}

 if (points3 > points2 && points3 > points1 && points3 > points4){
        $("#buttonOne").hide();
        $("#buttonTwo").hide();
        $("#buttonThree").hide();
        $("#buttonFour").hide();
        $("#Bubbles").show();
        $("#heading").text("You are Bubbles");
        
        $("p").hide();
        $("div").hide();
}

 if (points4 > points2 && points4 > points3 && points4 > points1){
        $("#buttonOne").hide();
        $("#buttonTwo").hide();
        $("#buttonThree").hide();
        $("#buttonFour").hide();
        $("#Lahey").show();
        $("#heading").text("You are Jim Lahey");
       
        $("p").hide();
        $("div").hide();
}

}
