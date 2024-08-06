

for(let i=0;i<document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", ()=>{
      const buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    
    
    });//addEventListener ends


};//for loop ends

function makeSound(key){

    switch(key){
        case "a":
            const a = new Audio("snare.mp3");
            a.play();
            break;
        case "b":
            const kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
        case "c":
            const tom = new Audio("tom-1.mp3");
            tom.play();
            break;
        case "d":
            const crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "e":
           const tom1 = new Audio("tom-2.mp3");
            tom1.play();
            break;
        case "f":
            const tom2 = new Audio("tom-3.mp3");
            tom2.play();
            break;

       default: console.log(key)
        break;

    };//switch ends



};


