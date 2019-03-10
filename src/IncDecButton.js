import React from 'react';

class IncDecButton extends React.Component {

    render() {
        return (
            <img 
                src={this.props.img} 
                alt={this.props.alt}
                onClick={this.props.incDecHandler}>
            </img>

        )
    }
}
    


export default IncDecButton;