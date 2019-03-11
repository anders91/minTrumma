import React from "react";
import Tone from "tone";
import PlayPause from "./PlayPause"

class Audio extends React.Component {

    constructor() {
        super()
        this.state = {
            hihatLoop: null,
            snareLoop: null,
            kickLoop:  null
        }
        this.makeLoop = this.makeLoop.bind(this)
        this.startLoop = this.startLoop.bind(this);
    }

    componentDidMount() {
        this.makeLoop(this.props.hihatRhythm, this.props.snareRhythm, this.props.kickRhythm);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.timeSignature !== this.props.timeSignature) {
            console.log(Tone.Transport);
            for (let i = 1; i < 37; i++) {
                Tone.Transport.clear(i)
            }
            console.log(Tone.Transport)

            this.makeLoop(this.props.hihatRhythm, this.props.snareRhythm, this.props.kickRhythm);

        }
      }

    makeLoop(hihatRhythm, snareRhythm, kickRhythm) {
        let hiHat = new Tone.Player("./audio/505/hh.[mp3|ogg]").toMaster();
        let kick = new Tone.Player("./audio/505/kick.[mp3|ogg]").toMaster();
        let snare = new Tone.Player("./audio/505/snare.[mp3|ogg]").toMaster();
        
        Tone.Buffer.on("load", () => {

            let tempHihatLoop = new Tone.Part(
                (time) => {
                    hiHat.start(time);
                }, hihatRhythm
            );
            
            let tempSnareLoop = new Tone.Part(
                (time) => {
                    snare.start(time);
                }, snareRhythm
            )

            let tempKickLoop = new Tone.Part(
                (time) => {
                    kick.start(time);
                }, kickRhythm
            )
            this.setState({
                hihatLoop: tempHihatLoop,
                snareLoop: tempSnareLoop,
                kickLoop: tempKickLoop
            }
            )
            tempHihatLoop.start(0);
            tempKickLoop.start(0);
            tempSnareLoop.start(0);
        });
    }

    startLoop() {
        
        Tone.Transport.toggle();
    }

    render () {
        Tone.Transport.bpm.value = this.props.bpm;
        Tone.Transport.timeSignature = this.props.timeSignature;
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