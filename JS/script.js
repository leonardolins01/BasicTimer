
const PlayBtn = document.querySelector('.play');
const PauseBtn = document.querySelector('.pause');
const StopBtn = document.querySelector('.stop');
const SetBtn = document.querySelector('.set');
const Sound_OnBtn = document.querySelector('.sound_on');
const Sound_OffBtn = document.querySelector('.sound_off');
const DisplayMinutes = document.querySelector('.minutes');
const DisplaySeconds = document.querySelector('.seconds');
let Minutes;
let Seconds;

import * as utils from './utils.js';

function CountDown () {
    setTimeout(
        function () {
            if (Seconds == 0) {
                Seconds = 59;
                if (Minutes != 0) {
                    Minutes = Minutes - 1;
                }
            }else {
                Seconds = Seconds - 1;
            }
            Update();
            if (Minutes == 0 && Seconds == 0) {
                alert("Time is over");
                PlayBtn.classList.remove("hide");
                PauseBtn.classList.add("hide");
                StopBtn.classList.add("hide");
                SetBtn.classList.remove("hide");
                return;
            }
            CountDown();
        }, 1000)
}

function Update () {
    DisplayMinutes.textContent = utils.FormatNumber(Minutes);
    DisplaySeconds.textContent = utils.FormatNumber(Seconds);
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
})

StopBtn.addEventListener("click", () => {
    PlayBtn.classList.remove("hide");
    PauseBtn.classList.add("hide");
    StopBtn.classList.add("hide");
    SetBtn.classList.remove("hide");
})

Sound_OnBtn.addEventListener("click", () => {
    Sound_OffBtn.classList.remove("hide");
    Sound_OnBtn.classList.add("hide");
})

Sound_OffBtn.addEventListener("click", () => {
    Sound_OffBtn.classList.add("hide");
    Sound_OnBtn.classList.remove("hide");
})

SetBtn.addEventListener("click", () => {
    Minutes = utils.InsertTime("minutes");
    Seconds = utils.InsertTime("seconds");
    Update();
})