import React from 'react';
import { CheckBoxInput } from './Styled/CheckBox.styled';

const CheckBox = (props) => {
    var checked = props.checked;
        return (
            <CheckBoxInput 
                name={props.name}
                type="checkbox"
                onChange={props.onChange} 
            />
        );
        
};

export default CheckBox;