import React, { Component } from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox/CheckBox';
import CheckBoxGroup from './CheckBox/CheckBoxGroup';

const CheckBoxPageContainer = styled.div`
    padding: 20px;
`

class CheckBoxPage extends Component {
    constructor() {
        super();

        this.state = {
            individualData: true,
            formData: {
                exampleOne: false,
                exampleTwo: false,
                exampleThree: "not CheckBox data",
                exampleFour: "meaningless value on this page"
            }
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
      
    render() {

        const checkBoxValues = [
            this.state.formData.exampleOne, 
            this.state.formData.exampleTwo
        ]

        return (
            <CheckBoxPageContainer>
                <h3>CheckBox</h3>

                <form>
                    <h4>Individual</h4>
                    <CheckBox 
                        name="individualData"
                        type="checkbox"
                        checked={this.state.individualData}
                        onChange={this.handleInputChange}
                    />

                    <h4>CheckBox Group</h4>
                    <CheckBoxGroup
                        checked={checkBoxValues}
                        onChange={this.handleInputChange}
                    />
                </form>
            </CheckBoxPageContainer>
        );
    }
}

export default CheckBoxPage;