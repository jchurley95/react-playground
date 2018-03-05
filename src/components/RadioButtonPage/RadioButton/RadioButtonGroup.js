import React from 'react';
import { RadioButtonGroupContainer } from './Styled/RadioButton.styled';
import RadioButton from './RadioButton';


const RadioButtonGroup = (props) => {
    var values = props.values;

    return (
        <RadioButtonGroupContainer>
            {
                values.map((currentValue, index) => {
                    var valueChecked = false;
                    if(currentValue === props.checkedValue) {
                        valueChecked = true;
                    }
                    return (
                        <RadioButton
                            key={index}
                            name={props.name}
                            value={currentValue}
                            clickFunction={props.clickFunction}
                            isChecked={valueChecked}
                        />
                    )
                })
            }
        </RadioButtonGroupContainer>
    );
};

export default RadioButtonGroup;