import React from 'react';
import { PanelContainer, Header, Content } from './Styled/Panel.styled';

const Panel = (props) => {
    const data = props.data;
    var contentShown = data.contentShown;
    console.log(props.id);

    return (
        <PanelContainer>
            <Header onClick={props.changeContentShown(props.id)}>{data.header}</Header>
            {
                contentShown 
                ?
                <Content>{data.content}</Content>
                :
                null
            }
        </PanelContainer>
    );
};

export default Panel;