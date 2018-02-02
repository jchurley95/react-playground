import React from 'react';
import { PanelContainer, Header, Content } from './Styled/Panel.styled';

const Panel = (props) => {
    const data = props.data;
    var contentShown = data.contentShown;

    const changeContentShown = () => {
        contentShown = !contentShown;
    }

    return (
        <PanelContainer>
            <Header onClick={changeContentShown}>{data.header}</Header>
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