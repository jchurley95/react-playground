import React from 'react';
import { CheckBoxGroupContainer } from './Styled/CheckBoxGroup.styled';
import CheckBox from './CheckBox';

const CheckBoxGroup = (props) => {
    const checkBoxValues = props.checkBoxValues;
    return (
        <CheckBoxGroupContainer>
            {
                Object.keys(checkBoxValues).map((currentValue, index) => {
                    return (
                        <CheckBox 
                            key={index}
                            name={currentValue} 
                            type="checkbox"
                            onChange={props.onChange}
                        />
                    )
                })
            }
        </CheckBoxGroupContainer>
    );
};

export default CheckBoxGroup;