import React from 'react';
import { shallow } from 'enzyme';
import Vet from '../src/vet/Vet';

const wrapper = shallow(<MyComponent/>);

describe('(Component) MyComponent', () => {
    it('renders without exploding', () => {
        expect(wrapper).to.have.length(1);
    });
});
