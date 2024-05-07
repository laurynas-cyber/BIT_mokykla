window.addEventListener('load', _ => {

    const dateInput = document.getElementById('date');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const pauseButton = document.getElementById('pause');
    const message = document.getElementById('message');

    let timer;
    let time = 0;
    let paused = false;
    let started = false;
    let dateStarted;
    let timerData;
    let beforePauseTime = 0;
    let startMarker;


    // make date line
    const makeDateLine = date => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    }

    // show today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = makeDateLine(today);
    dateInput.value = todayStr;

    // set picker interval to yesterday and today
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStr = makeDateLine(yesterday);
    dateInput.max = todayStr;
    dateInput.min = yesterdayStr;

    dateInput.addEventListener('change', e => {
        // disable empty date
        if (e.target.value === '') {
            e.target.value = todayStr;
            dateError(e.target);
        }
        // disable future dates
        if (e.target.value > todayStr) {
            e.target.value = todayStr;
            dateError(e.target);
        }
        // disable past dates but allow today and yesterday
        if (e.target.value < todayStr) {
            const date = new Date(e.target.value);
            yesterday.setDate(today.getDate() - 1);
            if (date < yesterday) {
                e.target.value = todayStr;
                dateError(e.target);
            }
        }
        setWorkDay();
    });


    // FUNCTIONS
    

    // show error on invalid date
    const dateError = i => {
        i.style.border = '1px solid crimson';
        setTimeout(() => {
            i.style.border = null;
        }, 3000);
    }

    // start timer
    startButton.addEventListener('click', _ => {
        if (dateInput.value === '') {
            dateError(dateInput);
            return;
        }
        if (!started || paused) {
            started = true;
            paused = false;
            startButton.disabled = true;
            stopButton.disabled = false;
            pauseButton.disabled = false;
            startTimer();
        }
    });

    // stop timer
    stopButton.addEventListener('click', _ => {
        if (started) {
            started = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            pauseButton.disabled = true;
            stopTimer();
        }
    });

    // pause timer
    pauseButton.addEventListener('click', _ => {
        if (started && !paused) {
            paused = true;
            startButton.disabled = false;
            stopButton.disabled = false;
            pauseButton.disabled = true;
            pauseTimer();
        }
    });

    // timer functions start, stop, pause
    const startTimer = _ => {
        dateStarted || (dateStarted = new Date());
        startMarker = new Date().getTime();
        dateInput.disabled = true;
        timer = setInterval(_ => {
            time++;
            document.getElementById('timer').innerText = `${makeTimeLine(time)}`;
        }, 1000);
    }
    const stopTimer = _ => {
        timerData = preapareData();
        clearInterval(timer);
        saveData();
    }
    const pauseTimer = _ => {
        beforePauseTime = time;
        clearInterval(timer);
    }

    // prepare data for saving
    const preapareData = _ => {
        return {
            date: dateInput.value,
            started: dateStarted.toLocaleString().match(/\d{1,2}:\d{1,2}:\d{1,2} (AM|PM)/)[0],
            stopped: new Date().toLocaleString().match(/\d{1,2}:\d{1,2}:\d{1,2} (AM|PM)/)[0],
            time: time
        }
    }


    // finish timer after sving data to db
    const finishTimer = _ => {
        dateInput.disabled = false;
        time = 0;
        dateStarted = null;
        paused = false;
        started = false;
        beforePauseTime = 0;
        document.getElementById('timer').innerText = '00:00:00';
        localStorage.removeItem('timer');
    }

    // save timer data to server db
    const saveData = async _ => {
        const response = await fetch('/save-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(timerData)
        });
        if (response.ok) {
            showMessages('success', 'Data saved');
            finishTimer();
            getData();
        } else {
            showMessages('error', 'Error saving data');
        }
    }

    // get timer data from server db
    const getData = async (firstTime = false) => {
        const response = await fetch('/get-data');
        if (response.ok) {
            const data = await response.json();
            makeList(data);
            if (firstTime) {
                const lsData = JSON.parse(localStorage.getItem('timer'));
                if (lsData) {
                    timerData = lsData;
                    saveData();
                }
            }
        } else {
            showMessages('error', 'Error getting data');
        }
    }

    // show messages
    const showMessages = (type, text) => {
        if (type === 'success') {
            message.style.color = 'limegreen';
            message.style.border = '1px solid #e4e4e4';
            message.innerText = text;
        } else {
            message.style.color = 'crimson';
            message.style.border = '1px solid #e4e4e4';
            message.innerText = text;
        }
        message.style.opacity = 1;
        setTimeout(_ => {
            message.style.opacity = 0;
        }, 5000);
    }

    // make time line
    const makeTimeLine = time => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor(time / 60) % 60;
        const seconds = time % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const liHtml = `
        <li>
            <div class="history__date-header">
                <span class="history__date">{{date}}</span>
                <span class="history__time {{color}}">{{time}}</span>
            </div>
            <div class="history__date-parts">{{parts}}</div>
        </li>
    `;

    const partHtml = `
        <div class="history__date-part">
            <span class="history__from">{{from}}</span>
            <span class="history__to">{{to}}</span>
            <span class="history__part-time">{{partTime}}</span>
        </div>
    `;

    // make history list
    const makeList = data => {
        const list = document.getElementById('history');
        list.innerHTML = '';
        data.forEach((item, i) => {
            const sumTime = item.l.reduce((acc, curr) => acc + curr.t, 0);
            const fourHours = 4 * 60 * 60;
            let color;
            if (sumTime < fourHours) {
                color = 'red';
            } else {
                color = 'green';
            }
            if (!i) {
                color += ' first';
            }
            let li = liHtml.replace('{{color}}', color).replace('{{date}}', item.d).replace('{{time}}', makeTimeLine(sumTime));
            let parts = '';
            item.l.forEach(part => {
                parts += partHtml.replace('{{from}}', part.s).replace('{{to}}', part.e).replace('{{partTime}}', makeTimeLine(part.t));
            });
            li = li.replace('{{parts}}', parts);
            list.insertAdjacentHTML('beforeend', li);
        });
        dateInput.min = setWorkDay();
    }

    // set work day color
    const setWorkDay = _ => {
        const first = document.querySelector('.first');
        const firstDate = first.closest('.history__date-header').querySelector('.history__date').innerText;
        if (firstDate === dateInput.value) {
            first.classList.add('blue');
        } else {
            first.classList.remove('blue');
        }
        return firstDate;
    }

    // write data to ls

    const saveAndSyncTime = _ => {
        setInterval(_ => {
            if (!started || paused) {
                return;
            }
            const now = new Date().getTime();
            const diff = now - startMarker;
            time = Math.floor(diff / 1000) + beforePauseTime;
            localStorage.setItem('timer', JSON.stringify(preapareData()));
        }, 10000);
    }

    getData(true);
    saveAndSyncTime();
});