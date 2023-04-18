import React from 'react';
import PropsPage from '../../page/index';
import { shallow } from 'enzyme';

describe('<PropsPage>', () => {
    it('Loads props page', () => {

        const ContextProvider = React.createContext({});

        const wrapper = shallow(
            <ContextProvider.Provider>
                <PropsPage />
            </ContextProvider.Provider>
        )

        expect(wrapper.find('pre').exists());
    })
})