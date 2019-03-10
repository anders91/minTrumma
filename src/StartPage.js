import React from "react";
//import PlayPause from "./PlayPause"
import plusImg from "./img/icons8-plus-50.png";
import minusImg from "./img/icons8-minus-50.png";
import IncDecButton from "./IncDecButton";
import Audio from "./Audio"
     
class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            bpm: 120,
            swing: "0"
        }
        this.handleBpm = this.handleBpm.bind(this);
        this.handleSwing = this.handleSwing.bind(this);
    }

    handleSwing() {
        if (this.state.swing === "0"){
            this.setState(
                {swing: "0.5"}
            )
        }
        else if (this.state.swing === "0.5") {
            this.setState(
                {swing: "0"}
            )
        }
    }

    handleBpm(type, buttonValue, event) {
        if (type === "range") {
            this.setState( {
                bpm: Number(event.target.value)
            })
        }
        else if (type === "button") {
            this.setState(prevState => {
                return {
                    bpm: prevState.bpm + Number(buttonValue)
                }
            })
        }
    }
    
    render() {
        return (
            <div id="StartPageWrapper">
                <h3 id="bpm">{this.state.bpm}</h3>
                <input type="checkbox" onChange={this.handleSwing}></input>
                <br />
                <IncDecButton 
                    img={plusImg}
                    alt="PlusImg"
                    incDecHandler={(e) => this.handleBpm("button","1", e)}
                />
                <Audio 
                    bpm={this.state.bpm}
                    hihatRhythm = {["0:0:0", "0:0:2", "0:1:0", "0:1:2", "0:2:0", "0:2:2", "0:3:0", "0:3:2"]}
                    snareRhythm = {["0:1:0", "0:3:0"]}
                    kickRhythm = {["0:0:0", "0:1:0", "0:2:0", "0:3:0"]}
                    swing = {this.state.swing}
                 />
                <IncDecButton 
                    img={minusImg}
                    alt="MinusImg" 
                    incDecHandler={(event) => this.handleBpm("button","-1", event)}
                />


                <br />
                <input  type='range'
                        value={this.state.bpm}
                        min="30"
                        max="280" 
                        onChange={(event) => this.handleBpm("range", null ,event)}>
                </input>
            </div>
        )
    }
};

export default StartPage;