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
            swing: false,
            timeSignature: "4",
            rhythms: rhythms.fyrtakt,
            rhythmPattern: "fyrtakt",
            disableSwing: false,
            multiplier: 1
        }
        this.handleBpm = this.handleBpm.bind(this);
        this.handleSwing = this.handleSwing.bind(this);
        this.changeTimeSignature = this.changeTimeSignature.bind(this);
    }

    componentDidMount() {
        this.wrapper = document.querySelector("html");
        disableBodyScroll(this.wrapper);
    }

    changeTimeSignature(newRhythm, newTimeSignature, disableSwing, newMultiplier, event) {
        if (disableSwing === true) {
            this.setState({swing: false})
        }
        this.setState({
                rhythms: newRhythm,
                disableSwing: disableSwing,
                timeSignature: newTimeSignature,
                rhythmPattern: event.target.value,
                multiplier: newMultiplier
            }
        )
    }

    handleSwing() {
        if (this.state.swing === false){
            this.setState(
                {swing: true}
            )
        }
        else if (this.state.swing === true) {
            this.setState(
                {swing: false}
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
                    <h3 id="bpm">Bpm: {Math.floor(this.state.bpm * this.state.multiplier)}</h3>
                    <div id="config">
                        <label id="swing">
                            <input type="checkbox" onChange={this.handleSwing} checked={this.state.swing} disabled={this.state.disableSwing} ></input>
                            {this.state.disableSwing ? <s>Swing</s> : "Swing"}
                        </label>
        
                        <form id="radio">
                            <div className="radio">
                            <label>
                                <input 
                                    type="radio"
                                    value="fyrtakt"
                                    checked={this.state.rhythmPattern === "fyrtakt"}
                                    onChange={(e) => this.changeTimeSignature(rhythms.fyrtakt, "4", rhythms.fyrtakt.disableSwing, 1, e)}/>
                                4/4
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input 
                                    type="radio" 
                                    value="tretakt"
                                    checked={this.state.rhythmPattern === "tretakt"}
                                    onChange={(e) => this.changeTimeSignature(rhythms.tretakt, "3", rhythms.tretakt.disableSwing, 1, e)}/>
                                3/4npm
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input 
                                    type="radio" 
                                    value="6/8"
                                    checked={this.state.rhythmPattern === "6/8"}
                                    onChange={(e) => this.changeTimeSignature(rhythms["6/8"], [6, 8], rhythms["6/8"].disableSwing, 2/3, e)}/>
                                6/8
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
                        swing = {this.state.swing ? "0.4" : "0"}
                        timeSignature = {this.state.timeSignature}
                        rhythmPattern = {this.state.rhythmPattern}
                    />
                    <IncDecButton 
                        img={plusImg}
                        alt="PlusImg"
                        incDecHandler={(e) => this.handleBpm("button","1", e)}
                    />

                </div>
                <div id="rangeWrapper">
                    <input  
                            id="range"
                            type='range'
                            value={this.state.bpm}
                            min="30"
                            max="280" 
                            onChange={(event) => this.handleBpm("range", null, event)}>
                    </input>
                </div>
            </div>
        )
    }
};

export default StartPage;