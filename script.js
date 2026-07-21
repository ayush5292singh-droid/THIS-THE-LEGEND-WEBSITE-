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

else{
answer = "📚 Sorry, I don't know that yet. More study topics will be added in future upgrades.";
}

chat.innerHTML+=`
<div class="bot">
🤖 StudyGenius AI<br><br>
${answer}
</div>
;
    
chat.scrollTop=chat.scrollHeight;

},1000);

}
