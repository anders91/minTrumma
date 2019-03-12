import React from 'react';

class IncDecButton extends React.Component {

    render() {
        return (
            <div className="IncDecButton">
                <img 
                    src={this.props.img} 
                    alt={this.props.alt}
                    onClick={this.props.incDecHandler}>
                </img>
            </div>
        )
    }
}
    


export default IncDecButton;