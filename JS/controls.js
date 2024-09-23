
export function Controls ({
    PlayBtn,
    PauseBtn,
    StopBtn,
    SetBtn,
    Sound_OnBtn,
    Sound_OffBtn
}) {

    function play() {
        PlayBtn.classList.toggle("hide");
        PauseBtn.classList.toggle("hide");
        SetBtn.classList.add("hide");
        StopBtn.classList.remove("hide");
    }

    function pause() {
        PlayBtn.classList.toggle("hide");
        PauseBtn.classList.toggle("hide");
    }

    function stop() {
        PlayBtn.classList.remove("hide");
        PauseBtn.classList.add("hide");
        StopBtn.classList.add("hide");
        SetBtn.classList.remove("hide");
    }

    /* set fuction is not necessary */

    function soundOn() {
        Sound_OffBtn.classList.remove("hide");
        Sound_OnBtn.classList.add("hide");
    }

    function soundOff() {
        Sound_OffBtn.classList.add("hide");
        Sound_OnBtn.classList.remove("hide");
    }

    return {
        play,
        pause,
        stop,
        soundOn,
        soundOff
    }

}