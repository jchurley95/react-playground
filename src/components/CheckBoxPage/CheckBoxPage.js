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
                exampleOne: true,
                exampleTwo: false,
                exampleThree: false,
                exampleFour: false
            }
        }
    }

    handleSingleInputChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        const newState = {...this.state}
        newState[name] = checked;
        this.setState(newState);
    }

    handleSpecificGroupInputChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        const newState = {...this.state}
        newState.formData[name] = checked;
        this.setState(newState);
    }
      
    render() {
        
        return (
            <CheckBoxPageContainer>
                <h3>CheckBox</h3>

                <form>
                    <h4>Individual CheckBox</h4>
                    <div><strong>individualData:</strong> {this.state.individualData.toString()}</div>
                    
                    <CheckBox 
                        name="individualData"
                        checked={this.state.individualData}
                        onChange={this.handleSingleInputChange}
                    />

                    <h4>CheckBox Group</h4>
                    <div><strong>exampleOne:</strong> {this.state.formData.exampleOne.toString()}</div>
                    <div><strong>exampleTwo:</strong> {this.state.formData.exampleTwo.toString()}</div>
                    <div><strong>exampleThree:</strong> {this.state.formData.exampleThree.toString()}</div>
                    <div><strong>exampleFour:</strong> {this.state.formData.exampleFour.toString()}</div>
                    <CheckBoxGroup
                        checkBoxValues={this.state.formData}
                        onChange={this.handleSpecificGroupInputChange}
                    />
                </form>
                
            </CheckBoxPageContainer>
        );
    }
}

export default CheckBoxPage;