function timer () {
    let secondsSpan = $('#seconds');
    let minutesSpan = $('#minutes');
    let hoursSpan = $('#hours');
    let totalSeconds = 0;
    let counter = undefined;
    $('#start-timer').click(() => {
        if (!counter) {
            counter = setInterval(step, 1000);
        }
    });

    $('#stop-timer').click(() => {
        clearInterval(counter);
        counter = undefined;
    });

    function step () {
        totalSeconds++;
        let seconds = parseInt(totalSeconds % 60);
        let minutes = parseInt(totalSeconds / 60);
        minutes = minutes % 60;
        let hours = parseInt(totalSeconds / 3600);

        seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
        minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
        hours = hours.toString().length === 1 ? '0' + hours : hours;

        secondsSpan.text(seconds);
        minutesSpan.text(minutes);
        hoursSpan.text(hours);
    }
}


