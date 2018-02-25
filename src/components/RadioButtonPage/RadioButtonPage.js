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
            optionSelected: "option one",
            groupOptionSelected: "option one"
        }
    }

    handleRadioButtonChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var newState = {...this.state}
        newState[name] = value;
        this.setState(newState)
    }

    render() {
        var groupValues = ["option one", "option two", "option three"];

        return (
            <RadioButtonPageContainer>
                <h3>Radio Button</h3>

                <h4>Individual Radio Buttons</h4>
                <div><strong>Selected:</strong> {this.state.optionSelected}</div>
                <RadioButton
                    name="optionSelected"
                    value="option one"
                    clickFunction={this.handleRadioButtonChange}
                    isChecked={true}
                />
                <RadioButton
                    name="optionSelected"
                    value="option two"
                    clickFunction={this.handleRadioButtonChange}
                />
                <RadioButton
                    name="optionSelected"
                    value="option three"
                    clickFunction={this.handleRadioButtonChange}
                />

                <h4> Radio Button Group </h4>
                <div><strong>Selected:</strong> {this.state.groupOptionSelected}</div>
                <RadioButtonGroup 
                    name="groupOptionSelected"
                    clickFunction={this.handleRadioButtonChange}
                    values={groupValues}
                    checkedValue={groupValues[0]}
                />

            </RadioButtonPageContainer>
        );
    }
}

export default RadioButtonPage;