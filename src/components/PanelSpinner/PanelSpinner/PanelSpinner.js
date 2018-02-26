import React, { Component } from 'react';
import { PanelSpinnerContainer, Carousel, IndividualPanelContainer } from './Styled/PanelSpinner.styled'
import IndividualPanel from './IndividualPanel';
import './Styled/PanelSpinner.css';


class PanelSpinner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDegrees: 0
        }
    }

    rotateLeft = () => {
        var transformDegrees = (360 / this.props.panels.length)
        var newDegrees = this.state.currentDegrees - transformDegrees;
        this.setState({currentDegrees: newDegrees})
    }

    rotateRight = () => {
        var transformDegrees = (360 / this.props.panels.length)
        var newDegrees = this.state.currentDegrees + transformDegrees;
        this.setState({currentDegrees: newDegrees})
    }

    render() {
        var carouselStyle = {
            WebkitTransform: "rotateY("+this.state.currentDegrees+"deg)",
            MozTransform: "rotateY("+this.state.currentDegrees+"deg)",
            OTransform: "rotateY("+this.state.currentDegrees+"deg)",
            transform: "rotateY("+this.state.currentDegrees+"deg)"
        }
        var transformDegrees = (360 / this.props.panels.length)
        let rotateDegrees = 0 - transformDegrees
        return (
            <div>
                <PanelSpinnerContainer className="container">
                    <Carousel className="my-carousel" style={carouselStyle}>
                        {this.props.panels.map((panel, index) => {
                            rotateDegrees = rotateDegrees + transformDegrees;
                            var currentStyle = {transform: "rotateY("+rotateDegrees+"deg) translateZ(220px)"}
                            return  <IndividualPanelContainer className="item" style={currentStyle} key={index}> 
                                            <h3>{panel.name}</h3>
                                            <p>{panel.description}</p>
                                    </IndividualPanelContainer>
                        })}
                    </Carousel>
                </PanelSpinnerContainer>
                <button className="next" onClick={this.rotateLeft}>Next</button>
                <button className="prev" onClick={this.rotateRight}>Prev</button>
            </div>
        );
    }
}

export default PanelSpinner;