/*
project Quality : change background with random rgb code color click button 

step for create project:
01. Create onload handler 
02. random color generator function
03. collect all necessary reference 
04. handle the click event 

*/



window.onload=()=>{
    main();
}

function main(){
    var root=document.getElementById("root")
    var btn = document.getElementById("change-color-btn")
    var output = document.getElementById("output")
    btn.addEventListener('click',function(){
        const bgColor=generateColor()
        root.style.backgroundColor=bgColor;
        output.value=bgColor;
    })
}

function generateColor(){
    var red=Math.floor(Math.random()*255);
    var green=Math.floor(Math.random()*255);
    var yellow=Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${yellow.toString(16)}`
}