function send(){

let input=document.getElementById("input");

let message=input.value.trim();

if(message==="") return;

let chat=document.getElementById("messages");

chat.innerHTML+=`
<div class="user">
${message}
</div>

<div class="bot">
📚 I received your question.

The Study Helper will answer it in Part 3.
</div>
`;

input.value="";

chat.scrollTop=chat.scrollHeight;

}
