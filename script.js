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
    if(q === "start quiz"){

chat.innerHTML+=`
<div class="bot">
🤖 <b>Study Quiz</b><br><br>

Question 1️⃣

What is the capital of India?

A) Mumbai

B) New Delhi

C) Kolkata

D) Chennai

Type only A, B, C or D.
</div>
`;

input.value="";
chat.scrollTop=chat.scrollHeight;
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
else if(q=="b"){

answer="✅ Correct! New Delhi is the capital of India.";

}

else if(q=="a" || q=="c" || q=="d"){

answer="❌ Wrong answer. Correct answer: B) New Delhi.";

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
    
chat.scrollTop=chat.scrollHeight;

},1000);

}
