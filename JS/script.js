
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
let TimerTimeOut;

import * as utils from './utils.js';
import {Controls} from './controls.js';
import Sound from './sound.js';

const sound = Sound();

const controls = Controls ({
    PlayBtn,
    PauseBtn,
    StopBtn,
    SetBtn,
    Sound_OnBtn,
    Sound_OffBtn
})

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
                sound.TimeEnd();
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
    controls.play();
    CountDown();
    sound.pressButton();
})

PauseBtn.addEventListener("click", () => {
    controls.pause();
    clearTimeout(TimerTimeOut);
    sound.pressButton();
})

StopBtn.addEventListener("click", () => {
    controls.stop();
    clearTimeout(TimerTimeOut);
    DisplayMinutes.textContent = Minutes;
    DisplaySeconds.textContent = Seconds;
    Update();
    sound.pressButton();
})

SetBtn.addEventListener("click", () => {
    Minutes = utils.InsertTime("minutes");
    Seconds = utils.InsertTime("seconds");
    DisplayMinutes.textContent = Minutes;
    DisplaySeconds.textContent = Seconds;
    Update();
})

Sound_OnBtn.addEventListener("click", () => {
    controls.soundOn();
    sound.bgAudio.pause();
})

Sound_OffBtn.addEventListener("click", () => {
    controls.soundOff();
    sound.bgAudio.play();
})
