var el = document.getElementById('time_span')
setInterval(function() {

    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        ampm = hours > 12 ? 'PM' : 'AM';

    hours += hours < 10 ? '0' : '';
    minutes += minutes < 10 ? '0' : '';
    seconds += seconds < 10 ? '0' : '';

    el.innerHTML = hours + ":" + minutes + ":" + seconds ;
}, 1000);