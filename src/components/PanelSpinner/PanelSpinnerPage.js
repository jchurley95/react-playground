import React, { Component } from 'react';
import styled from 'styled-components';
import PanelSpinner from './PanelSpinner/PanelSpinner';

const PanelSpinnerPageContainer = styled.div`

`

class PanelSpinnerPage extends Component {
    constructor() {
        super();

        this.state = {
            panels: [
                {
                    name: "Panel One",
                    description: "Clicking the buttons updates the state value for current degrees of rotation."
                },
                {
                    name: "Panel Two",
                    description: "The rotation between is equal to number of panels divided by 360 degrees."
                },
                {
                    name: "Panel Three",
                    description: "The speed of rotation is configured by the developer as a css value."
                },
                {
                    name: "Panel Four",
                    description: "When the pieces are rotated they are moved forwards or backwards in terms of their z-index."
                },
                {
                    name: "Panel Five",
                    description: "The tilt of the spinner can be adjusted as well."
                },
                {
                    name: "Panel Six",
                    description: "The more panels, the closer the spinner gets to appearing as an circle"
                },
                {
                    name: "Panel Seven",
                    description: "This project success is due to CSS 3D Transform properties."
                },
                {
                    name: "Panel Eight",
                    description: "Cheaper than a fidget spinner."
                }
                
            ]
        }
    }
    render() {
        return (
            <PanelSpinnerPageContainer>
                <h3>Panel Spinner</h3>

                <PanelSpinner panels={this.state.panels}/>
                
            </PanelSpinnerPageContainer>
        );
    }
}

export default PanelSpinnerPage;