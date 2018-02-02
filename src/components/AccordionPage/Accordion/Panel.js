import React, { Component } from 'react';
import { PanelContainer, Header, Content } from './Styled/Panel.styled';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props
        }
    }
    // Setting state with props like this is not recommended for final use
    // I did this so that I could trigger a setState within this component and cause the component to re-render
        // The function could be passed from a higher level of state as a prop to be used here, but in this manner the panel component be dropped into the code indendependently of the Accordion, which is just a group of panels

    changeContentShown = () => {
        let newData = {...this.state.data};
        console.log(newData.contentShown);
        newData.contentShown = !newData.contentShown;
        console.log("Now it is: ", newData.contentShown)
        this.setState({
            data: newData
        })
    }

    render() {
        const data = this.state.data;
        var contentShown = data.contentShown;

        return (
            <PanelContainer>
                <Header onClick={this.changeContentShown}>{data.header}</Header>
                {
                    contentShown
                        ?
                        <Content>{data.content}</Content>
                        :
                        null
                }
            </PanelContainer>
        );
    }
}

export default Panel;