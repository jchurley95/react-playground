import React from 'react';
import { AccordionContainer } from './Styled/Accordion.styled';
import Panel from './Panel';

const Accordion = (props) => {
    const exampleData = props.exampleData;
        return (
            <AccordionContainer>
                {   
                    exampleData.map((data, key) => {
                        return <Panel data={data} id={key} key={key}/>
                    })
                }
            </AccordionContainer>
        );
};

export default Accordion;