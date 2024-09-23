
const PlayBtn = document.querySelector('.play');
const PauseBtn = document.querySelector('.pause');
const StopBtn = document.querySelector('.stop');
const SetBtn = document.querySelector('.set');
const Sound_OnBtn = document.querySelector('.sound_on');
const Sound_OffBtn = document.querySelector('.sound_off');
const DisplayMinutes = document.querySelector('.minutes');
const DisplaySeconds = document.querySelector('.seconds');
let Minutes = Number(DisplayMinutes.textContent);
let Seconds = Number(DisplaySeconds.textContent);
let TimerTimeOut

import * as utils from './utils.js';


function CountDown () {
    let M = Number(DisplayMinutes.textContent);
    let S = Number(DisplaySeconds.textContent);
    TimerTimeOut = setTimeout(
        function () {

            if (M == 0 && S == 0) {
                PlayBtn.classList.remove("hide");
                PauseBtn.classList.add("hide");
                StopBtn.classList.add("hide");
                SetBtn.classList.remove("hide");
                setTimeout( function () {
                    alert("Time's up!");
                }, 300)
                return;
            }

            if (S == 0) {
                S = 59;
                if (M != 0) {
                    M = M - 1;
                }
            }else {
                S = S - 1;
            }

            DisplayMinutes.textContent = Number(M);
            DisplaySeconds.textContent = Number(S);

            Update();
            CountDown();
        }, 1000)
}

function Update () {
    DisplayMinutes.textContent = String(DisplayMinutes.textContent).padStart(2, '0');
    DisplaySeconds.textContent = String(DisplaySeconds.textContent).padStart(2, '0');
}


PlayBtn.addEventListener("click", () => {
    PlayBtn.classList.toggle("hide");
    PauseBtn.classList.toggle("hide");
    SetBtn.classList.add("hide");
    StopBtn.classList.remove("hide");
    CountDown();
})

PauseBtn.addEventListener("click", () => {
    PlayBtn.classList.toggle("hide");
    PauseBtn.classList.toggle("hide");
    clearTimeout(TimerTimeOut);
})

StopBtn.addEventListener("click", () => {
    PlayBtn.classList.remove("hide");
    PauseBtn.classList.add("hide");
    StopBtn.classList.add("hide");
    SetBtn.classList.remove("hide");
    clearTimeout(TimerTimeOut);
    DisplayMinutes.textContent = Minutes;
    DisplaySeconds.textContent = Seconds;
    Update();
})

SetBtn.addEventListener("click", () => {
    Minutes = utils.InsertTime("minutes");
    Seconds = utils.InsertTime("seconds");
    DisplayMinutes.textContent = Minutes;
    DisplaySeconds.textContent = Seconds;
    Update();
})

Sound_OnBtn.addEventListener("click", () => {
    Sound_OffBtn.classList.remove("hide");
    Sound_OnBtn.classList.add("hide");
})

Sound_OffBtn.addEventListener("click", () => {
    Sound_OffBtn.classList.add("hide");
    Sound_OnBtn.classList.remove("hide");
})
