const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

let sec = 1;
let min = 1;

const timer = setInterval(()=>{

    if (sec.toString().length < 2) {

        seconds.innerHTML = '0' + sec++;

    } else if (sec == 60) {

        min = min+1;
        sec = 0;
        seconds.innerHTML = '0' + sec++;
        
        if (min.toString().length < 2) minutes.innerHTML = '0' + min;
        else minutes.innerHTML = min;

    } else {

        seconds.innerHTML = sec++;

    }

}, 1000);