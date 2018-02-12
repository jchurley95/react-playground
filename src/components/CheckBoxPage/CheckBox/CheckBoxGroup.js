import React from 'react';
import { CheckBoxGroupContainer } from './Styled/CheckBoxGroup.styled';
import CheckBox from './CheckBox';

const CheckBoxGroup = (props) => {
    const checkBoxData = props.checked;
    return (
        <CheckBoxGroupContainer>
            {
                checkBoxData.map((currentValue, index) => {
                    return (
                        <CheckBox 
                            key={index}
                            name="individualData" 
                            type="checkbox"
                            checked={currentValue}
                            onChange={props.onChange}
                        />
                    )
                })
            }
        </CheckBoxGroupContainer>
    );
};

export default CheckBoxGroup;