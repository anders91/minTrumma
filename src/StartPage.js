import React from "react";
import plusImg from "./img/icons8-plus-50.png";
import minusImg from "./img/icons8-minus-50.png";
import IncDecButton from "./IncDecButton";
import Audio from "./Audio";
import rhythms from "./rhytms";
// eslint-disable-next-line
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from "body-scroll-lock"     

class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            bpm: 120,
            swing: "0",
            timeSignature: "4",
            rhythms: rhythms.fyrtakt,
            rhythmPattern: "fyrtakt"
        }
        this.handleBpm = this.handleBpm.bind(this);
        this.handleSwing = this.handleSwing.bind(this);
        this.changeTimeSignature = this.changeTimeSignature.bind(this);
    }

    componentDidMount() {
        this.wrapper = document.querySelector("app");
        disableBodyScroll(this.wrapper);
    }

    changeTimeSignature(newRhythm, newTimeSignature, event) {
        this.setState({
                rhythms: newRhythm,
                timeSignature: newTimeSignature,
                rhythmPattern: event.target.value
            }
        )
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
                <div>
                    <h3 id="bpm">Bpm: {this.state.bpm}</h3>
                    <div id="config">
                        <label id="swing">
                            <input type="checkbox" onChange={this.handleSwing}></input>
                            Swing
                        </label>
        
                        <form id="radio">
                            <div className="radio">
                            <label>
                                <input 
                                    type="radio"
                                    value="fyrtakt"
                                    checked={this.state.rhythmPattern === "fyrtakt"}
                                    onChange={(e) => this.changeTimeSignature(rhythms.fyrtakt, "4", e)}/>
                                Fyrtakt
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input 
                                    type="radio" 
                                    value="tretakt"
                                    checked={this.state.rhythmPattern === "tretakt"}
                                    onChange={(e) => this.changeTimeSignature(rhythms.tretakt, "3", e)}/>
                                Tretakt
                            </label>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <div id="buttons">
                    <IncDecButton 
                        img={minusImg}
                        alt="MinusImg" 
                        incDecHandler={(event) => this.handleBpm("button","-1", event)}
                    />
                    <Audio 
                        bpm={this.state.bpm}
                        hihatRhythm = {this.state.rhythms.hihatRhythm}
                        snareRhythm = {this.state.rhythms.snareRhythm}
                        kickRhythm = {this.state.rhythms.kickRhythm}
                        swing = {this.state.swing}
                        timeSignature = {this.state.timeSignature}
                    />
                    <IncDecButton 
                        img={plusImg}
                        alt="PlusImg"
                        incDecHandler={(e) => this.handleBpm("button","1", e)}
                    />

                </div>
                <input  
                        id="range"
                        type='range'
                        value={this.state.bpm}
                        min="30"
                        max="280" 
                        onChange={(event) => this.handleBpm("range", null, event)}>
                </input>
            </div>
        )
    }
};

export default StartPage;