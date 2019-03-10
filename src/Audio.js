import React from "react";
import Tone from "tone";
import PlayPause from "./PlayPause"

class Audio extends React.Component {

    constructor(props) {
        super(props)
        
        this.makeLoop = this.makeLoop.bind(this)
        this.startLoop = this.startLoop.bind(this);
    }

    componentDidMount() {
        this.makeLoop(this.props.hihatRhythm, this.props.snareRhythm, this.props.kickRhythm);
    }

    makeLoop(hihatRhythm, snareRhythm, kickRhythm) {
        let hiHat = new Tone.Player("./audio/505/hh.[mp3|ogg]").toMaster();
        let kick = new Tone.Player("./audio/505/kick.[mp3|ogg]").toMaster();
        let snare = new Tone.Player("./audio/505/snare.[mp3|ogg]").toMaster();
        
        
        Tone.Buffer.on("load", () => {

            let hihatLoop = new Tone.Part(
                (time) => {
                    hiHat.start(time);
                }, hihatRhythm
            );
            
            let snareLoop = new Tone.Part(
                (time) => {
                    snare.start(time);
                }, snareRhythm
            )

            let kickLoop = new Tone.Part(
                (time) => {
                    kick.start(time);
                }, kickRhythm
            )
            hihatLoop.start(0);
            snareLoop.start(0);
            kickLoop.start(0)
        });


    }

    startLoop() {
        
        Tone.Transport.toggle();
    }

    render () {
        Tone.Transport.bpm.value = this.props.bpm;
        Tone.Transport.loop = true;
        Tone.Transport.loopEnd = "1m";
        Tone.Transport.swing = this.props.swing;

        return (
            <div onClick={this.startLoop}>    
                <PlayPause />
            </div>
        )
    }
}

export default Audio