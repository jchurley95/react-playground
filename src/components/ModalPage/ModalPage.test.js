import React from 'react';
import ReactDOM from 'react-dom';
import ModalPage from './ModalPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});