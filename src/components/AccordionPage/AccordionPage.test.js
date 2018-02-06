import React from 'react';
import ReactDOM from 'react-dom';
import AccordionPage from './AccordionPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccordionPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});