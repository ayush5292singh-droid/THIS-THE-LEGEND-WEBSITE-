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

setTimeout(()=>{

document.getElementById("typing").remove();

chat.innerHTML+=`
<div class="bot">
🤖 StudyGenius AI<br><br>

I received your study question.

I will answer it in the next upgrade.
</div>
`;

chat.scrollTop=chat.scrollHeight;

},1000);

}
