import React, { Component } from 'react';
import { PanelContainer, Header, Content } from './Styled/Panel.styled';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props
        }
    }

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