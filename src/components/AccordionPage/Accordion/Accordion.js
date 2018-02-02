import React, { Component } from 'react';
import { AccordionContainer } from './Styled/Accordion.styled';
import Panel from './Panel';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    

    render() {
        const exampleData = this.state.exampleData;
        return (
            <AccordionContainer>
                {   
                    exampleData.map((data, key) => {
                        return <Panel data={data} id={key} key={key} changeContentShown={this.changeContentShown}/>
                    })
                }
            </AccordionContainer>
        );
    }
}

export default Accordion;