import React, { Component } from 'react';
import styled from 'styled-components'
import RadioButton from './RadioButton/RadioButton';
import RadioButtonGroup from './RadioButton/RadioButtonGroup'

const RadioButtonPageContainer = styled.div`
    padding: 20px;
`

class RadioButtonPage extends Component {

    constructor() {
        super();

        this.state = {
            optionSelected: "option one"
        }
    }

    handleSingleRadioButtonChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var newState = {...this.state}
        newState[name] = value;
        console.log(newState)
        this.setState(newState)
    }

    handleGroupRadioButtonChange = (event) => {
        
    }


    render() {
        return (
            <RadioButtonPageContainer>
                <h3>Radio Button</h3>

                <h4>Individual Radio Buttons</h4>
                <div><strong>Selected:</strong> {this.state.optionSelected}</div>
                <RadioButton
                    name="optionSelected"
                    value="option one"
                    clickFunction={this.handleSingleRadioButtonChange}
                    isChecked={true}
                />
                <RadioButton
                    name="optionSelected"
                    value="option two"
                    clickFunction={this.handleSingleRadioButtonChange}
                />
                <RadioButton
                    name="optionSelected"
                    value="option three"
                    clickFunction={this.handleSingleRadioButtonChange}
                />

                <RadioButtonGroup 

                />

            </RadioButtonPageContainer>
        );
    }
}

export default RadioButtonPage;