import React from "react";
import plusImg from "./img/icons8-plus-50.png";
import minusImg from "./img/icons8-minus-50.png";
import IncDecButton from "./IncDecButton";
import Audio from "./Audio";
import rhythms from "./rhytms";
     
class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            bpm: 120,
            swing: "0",
            timeSignature: "4",
            rhythms: rhythms.fyrtakt
        }
        this.handleBpm = this.handleBpm.bind(this);
        this.handleSwing = this.handleSwing.bind(this);
        this.changeTimeSignature = this.changeTimeSignature.bind(this);
    }

    changeTimeSignature() {
        if (this.state.timeSignature === "4"){
            this.setState( {
                    timeSignature: "3",
                    rhythms: rhythms.tretakt
                }
            )
        }
        else if (this.state.timeSignature === "3") {
            this.setState( {
                timeSignature: "4",
                rhythms: rhythms.fyrtakt
            }
        )
        }
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
                <label>
                    <input type="checkbox" onChange={this.handleSwing}></input>
                    Swing
                </label>
                <br />
                <IncDecButton 
                    img={plusImg}
                    alt="PlusImg"
                    incDecHandler={(e) => this.handleBpm("button","1", e)}
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
                    img={minusImg}
                    alt="MinusImg" 
                    incDecHandler={(event) => this.handleBpm("button","-1", event)}
                />


                <br />
                <input  type='range'
                        value={this.state.bpm}
                        min="30"
                        max="280" 
                        onChange={(event) => this.handleBpm("range", null, event)}>
                </input>
                <button onClick={this.changeTimeSignature}>tretakt</button>
                <form>
                    <div className="radio">
                    <label>
                        <input 
                            type="radio"
                            value="4" 
                            checked={this.state.timeSignature === "4"}
                            onChange={this.changeTimeSignature}/>
                        Fyrtakt
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="3"
                            checked={this.state.timeSignature === "3"}
                            onChange={this.changeTimeSignature} /> 
                        Tretakt
                    </label>
                    </div>
                </form>
            </div>
        )
    }
};

export default StartPage;