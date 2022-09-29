var numberofdrums=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofdrums; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        
        makeSoundOnClick(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

// on click, button will produce particular sound.
function makeSoundOnClick(key){
    switch(key){
        case "🐦":{
            var bird = new Audio("sounds/birds.mp3");
            bird.loop=true;
            bird.play(this);
            break;
        }
        case "🕛":{
            var clock = new Audio("sounds/clock.mp3");
            clock.play(this);
            break;
        }
        case "🔥":{
            var fire = new Audio("sounds/fire.mp3");
            fire.play(this);
            break;
        }
        case "🐜":{
            var ant = new Audio("sounds/insect.mp3");
            ant.play(this);
            break;
        }
        case "🌧️":{
            var rain = new Audio("sounds/rain.mp3");
            rain.play(this);
            break;
        }
        case "⛈️":{
            var thunder = new Audio("sounds/thunder.mp3");
            thunder.play(this);
            break;
        }
        case "🚄":{
            var train = new Audio("sounds/train.mp3");
            train.play(this);
            break;
        }

    }
}
//animation on click 
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
}
