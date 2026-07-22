let score = 0;
let quiz = 0;

function send(){
function send(){

let input=document.getElementById("input");
let message=input.value.trim();

if(message==="") return;

let chat=document.getElementById("messages");

chat.innerHTML+=`
<div class="user">
🧑 You<br><br>${message}
</div>

<div class="typing" id="typing">
🤖 Typing...
</div>
`;

chat.scrollTop=chat.scrollHeight;

input.value="";

  settimeout(()=>{
document.getElementById("typing").remove();

let q = message.toLowerCase();
    if(q=="start quiz"){

score=0;
quiz=1;

chat.innerHTML+=`
<div class="bot">
🤖 <b>Quiz Started!</b><br><br>

Question 1/3

What is the capital of India?

A) Mumbai

B) New Delhi

C) Chennai

D) Kolkata

Type only A, B, C or D.
</div>
`;

chat.scrollTop=chat.scrollHeight;

input.value="";

return;

}

let answer = "";

if(q.includes("photosynthesis")){
answer = "🌿 Photosynthesis is the process by which green plants use sunlight, water and carbon dioxide to make food (glucose) and release oxygen.";
}

else if(q.includes("gravity")){
answer = "🌍 Gravity is the force that attracts objects towards the Earth.";
}

else if(q.includes("newton")){
answer = "📘 Sir Isaac Newton gave the three laws of motion and the law of universal gravitation.";
}

else if(q.includes("heart")){
answer = "❤️ The human heart has four chambers and pumps blood throughout the body.";
}

else if(q.includes("pythagoras")){
answer = "📐 Pythagoras Theorem: In a right triangle, a² + b² = c².";
}

else if(q.includes("capital of india")){
answer = "🇮🇳 The capital of India is New Delhi.";
}

else if(q.includes("water formula")){
answer = "💧 The chemical formula of water is H₂O.";
}

else if(q.includes("periodic table")){
answer = "🧪 The periodic table organizes chemical elements according to their atomic number.";
}

else if(q.includes("force")){
answer = "⚡ Force is a push or pull acting on an object. SI unit: Newton (N).";
}

else if(q.includes("speed")){
answer = "🚗 Speed = Distance ÷ Time.";
}

else if(q.includes("velocity")){
answer = "🏃 Velocity is speed in a particular direction.";
}

else if(q.includes("cell")){
answer = "🧬 A cell is the basic structural and functional unit of life.";
}

else if(q.includes("atom")){
answer = "⚛️ An atom is the smallest unit of an element.";
}

else if(q.includes("democracy")){
answer = "🏛️ Democracy is a form of government in which people elect their representatives.";
}

else if(q.includes("noun")){
answer = "📖 A noun is the name of a person, place, thing or idea.";
}

else if(q.includes("verb")){
answer = "✍️ A verb is a word that shows an action or state.";
}

else if(q.includes("adjective")){
answer = "📝 An adjective describes or modifies a noun.";
}

else if(q.includes("prime number")){
answer = "🔢 A prime number has exactly two factors: 1 and itself.";
}

else if(q.includes("area of circle")){
answer = "⭕ Area of a circle = πr².";
}

else if(q.includes("perimeter")){
answer = "📏 Perimeter is the total distance around a shape.";
}

else if(q.includes("study tip")){
answer = "💡 Study for 25–30 minutes, take a short break, then continue.";
}
else if(quiz==1 && q=="b"){

score++;

quiz=2;

answer=`✅ Correct!

Score: ${score}/1

Question 2/3

What is H₂O?

A) Oxygen

B) Hydrogen

C) Water

D) Helium`;

}

else if(quiz==2 && q=="c"){

score++;

quiz=3;

answer=`✅ Correct!

Score: ${score}/2

Question 3/3

Who discovered gravity?

A) Einstein

B) Newton

C) Edison

D) Tesla`;

}
else if(quiz==3 && q=="b"){

score++;

quiz=0;

answer=`🎉 Quiz Finished!

Your Score: ${score}/3

Excellent Work!`;
function toggleTheme(){

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

}
  if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}
}

else{

answer="📚 Sorry, I don't know that yet. I will learn more topics in future updates.";

}




chat.innerHTML+=`
<div class="bot">
🤖 StudyGenius AI<br><br>
${answer}
</div>
;

  increaseProgress();

chat.scrollTop=chat.scrollHeight;

},1000);

}
function calculator(){

let a=prompt("Enter first number");

let b=prompt("Enter second number");

alert("Answer = "+(Number(a)+Number(b)));

}

function notes(){

let note=prompt("Write your note");

localStorage.setItem("note",note);

alert("Note Saved!");

}

function planner(){

alert("📅 Study Plan\n\n1. Maths\n2. Science\n3. English\n4. Revision");

}
function calculator(){

let a=prompt("Enter first number");

let b=prompt("Enter second number");

alert("Answer = "+(Number(a)+Number(b)));

}

function notes(){

let note=prompt("Write your note");

localStorage.setItem("note",note);

alert("Note Saved!");

}

function planner(){

alert("📅 Study Plan\n\n1. Maths\n2. Science\n3. English\n4. Revision");

}
let goal=prompt("Enter today's study goal (Cancel to skip)");

if(goal){

alert("🎯 Today's Goal:\n"+goal);

}
let progress=0;

function increaseProgress(){

if(progress<100){

progress+=10;

document.getElementById("bar").value=progress;

}

}
