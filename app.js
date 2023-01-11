const startTime = document.querySelector('.start');
const StopTime = document.querySelector('.stop');
const sec = document.querySelector('.seconds');
const min = document.querySelector('.minute');
const reset = document.querySelector('.reset');

let seconds = 0;
let minute = 0;

startTime.addEventListener('click', function(){
    interval = setInterval(startTimer, 1000)
    function startTimer(){
        seconds++;
        if(seconds <= 9){
            sec.innerHTML = '0' + seconds;
        }
        if(seconds > 9){
            sec.innerHTML = seconds;
        }
        if(seconds >= 60){
            minute++;
            min.innerHTML = minute;
            sec.innerHTML = '00';
            seconds = 0;

        }
        if(minute <= 9){
            min.innerHTML = '0' + minute
        }
        
    }

})

StopTime.addEventListener('click', function(){
    clearInterval(interval)

})

reset.addEventListener('click', function(){
    clearInterval(interval);
    sec.innerHTML = '00';
    min.innerHTML = '00';
    seconds = 0;
    minute = 0;


})



