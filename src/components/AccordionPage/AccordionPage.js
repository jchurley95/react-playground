import React, { Component } from 'react';
import Accordion from './Accordion/Accordion';
import styled from 'styled-components';

const AccordionPageContainer = styled.div`
    padding: 20px;
`

class AccordionPage extends Component {
    constructor() {
        super();
        this.state = {
            exampleData: [
                {
                    header: "Example Header 1",
                    content: "Example Content 1",
                    contentShown: true
                },
                {
                    header: "Example Header 2",
                    content: "Example Content 2",
                    contentShown: true
                },
                {
                    header: "Example Header 3",
                    content: "Example Content 3",
                    contentShown: false
                }
            ]
        }
    }
    render() {
        const exampleData = this.state.exampleData;
        console.log("exampleData in page is: ", exampleData);

        return (
            <AccordionPageContainer>
                <Accordion exampleData={exampleData}/>
            </AccordionPageContainer>
        );
    }
}

export default AccordionPage;