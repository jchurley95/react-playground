import React from 'react';
import ReactDOM from 'react-dom';
import DatePickerPage from './DatePickerPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePickerPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});