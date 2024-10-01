let today = new Date();
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

day = day[today.getDay()];
// console.log(day);
const displayer1 = document.getElementById('today');
displayer1.innerHTML=day;

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var currentTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return currentTime;
  }
  
  // console.log(formatAMPM(new Date));
  let time = document.getElementById('time');
  time.innerHTML = formatAMPM(new Date);