const colors=["white","blue","green","red","crimson","#23eddc","#bdff77","rgb(227, 63, 63)"];

const btn=document.querySelector(".btn")
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
    console.log(colors[randomNumber]);

    document.body.style.backgroundColor=colors[randomNumber];
    color.style.color=colors[randomNumber]
    color.textContent=colors[randomNumber];

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}