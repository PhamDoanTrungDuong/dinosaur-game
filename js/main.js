var character = document.getElementById("character");
var block = document.getElementById("block");
const jump = () => {
   if(character.classList != "animate"){
      character.classList.add("animate");
   }
   setTimeout(() => {
      character.classList.remove("animate");
   }, 500);
}

var checkDead = setInterval(() => {
   var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
      block.style.animation = "none";
      block.style.display = "none";
      alert("u loss")
   }
})