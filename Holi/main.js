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

const startChangingColor = function(){
    setInterval(changeBgColor,1000);

    function changeBgColor(){
        document.body.style.backgroundColor = randomColour()
    }
}


document.getElementById('start').addEventListener('click',startChangingColor);

// const stopChangingColor = stop(startChangingColor)

const letstop = document.getElementById('stop').addEventListener('click',function(){
    clearID()
    console.log("Interval stopped");
});

