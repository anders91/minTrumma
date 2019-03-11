import Tone from "tone"
let audio = {
    hiHat : new Tone.Player("./audio/505/hh.[mp3|ogg]").toMaster(),
    kick : new Tone.Player("./audio/505/kick.[mp3|ogg]").toMaster(),
    snare : new Tone.Player("./audio/505/snare.[mp3|ogg]").toMaster()
}

export default audio