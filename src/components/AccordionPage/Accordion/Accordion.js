import React, { Component } from 'react';
import { AccordionContainer } from './Styled/Accordion.styled';
import Panel from './Panel';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentWillMount() {
        let exampleData = {...this.props.exampleData};
        this.setState({exampleData});
    }

    changeContentShown = () => {
        let contentShown = this.props.contentShown
        // this.props.contentShown = !this.props.contentShown;
    }

    render() {
        const exampleData = this.props.exampleData;
        return (
            <AccordionContainer>
                {   
                    exampleData.map((data, key) => {
                        return <Panel data={data} key={key} />
                    })
                }
            </AccordionContainer>
        );
    }
}

export default Accordion;