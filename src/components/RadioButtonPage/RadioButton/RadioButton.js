import React from 'react';
import { RadioButtonContainer } from './Styled/RadioButton.styled'

const RadioButton = (props) => {
    if(props.isChecked) {
        return (
            <RadioButtonContainer>
                <input 
                    type="radio"
                    onClick={props.clickFunction}
                    name={props.name}
                    value={props.value}
                    defaultChecked
                />
                <label>{props.value}</label>
            </RadioButtonContainer>
        );
    }
    else {
        return (
            <RadioButtonContainer>
                <input 
                    type="radio"
                    onClick={props.clickFunction}
                    name={props.name}
                    value={props.value}
                />
                <label>{props.value}</label>
            </RadioButtonContainer>
        );
    }
};

export default RadioButton;