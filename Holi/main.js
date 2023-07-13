// Generate colors

const randomColour = function(){
    const hex = '0123456789ABCDF';
    let color = '#';
    for (let i = 0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
};
// console.log(randomColour());

let intervalId;
const startChangingColor = function(){
    if(!intervalId){
       intervalId = setInterval(changeBgColor,1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColour()
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.getElementById('start').addEventListener('click',startChangingColor);

document.getElementById('stop').addEventListener('click',stopChangingColor);

