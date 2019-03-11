import React from "react";
import Tone from "tone";
import PlayPause from "./PlayPause";
import audioSamples from "./audioImport"

class Audio extends React.Component {

    constructor(props) {
        super(props)

        this.makeLoop = this.makeLoop.bind(this)
        this.startLoop = this.startLoop.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
        Tone.Buffer.on("load", () => {
            this.makeLoop(this.props.hihatRhythm, this.props.snareRhythm, this.props.kickRhythm)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props)

        if (prevProps.timeSignature !== this.props.timeSignature) {

            this.makeLoop(this.props.hihatRhythm, this.props.snareRhythm, this.props.kickRhythm);

        }
      }
    makeLoop(hihatRhythm, snareRhythm, kickRhythm) {
        Tone.Transport.cancel(0)

            let hihatBar = new Tone.Part(
                (time) => {
                    audioSamples.hiHat.start(time);
                }, hihatRhythm
            );
            
            let snareBar = new Tone.Part(
                (time) => {
                    audioSamples.snare.start(time);
                }, snareRhythm
            )

            let kickBar = new Tone.Part(
                (time) => {
                    audioSamples.kick.start(time);
                }, kickRhythm
            )

            hihatBar.start(0);
            snareBar.start(0);
            kickBar.start(0);
    }

    startLoop() {
        
        Tone.Transport.toggle();
    }

    render () {
        console.log(this.props);
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