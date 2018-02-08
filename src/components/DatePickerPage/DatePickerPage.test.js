import React from 'react';
import ReactDOM from 'react-dom';
import DatePickerPage from './DatePickerPage';
import sinon from 'sinon';
import { mount } from 'enzyme';

describe('<DatePickerPage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DatePickerPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
        
    });

    // it('simulates click events', () => {
    //     // const onButtonClick = sinon.spy();
    //     const wrapper = mount((
    //       <DatePickerPage />
    //     ));

    //     console.log(DatePickerPage.prototype)
    //     // wrapper.find('button').simulate('click');
    //     // console.log(onButtonClick)
    //     // expect(onButtonClick).to.have.property('callCount', 1);
    // });
})
