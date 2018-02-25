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
            </RadioButtonContainer>
        );
    }
    
};

export default RadioButton;