import React, { useContext } from 'react';
import PropsCard from '../../cards/PropsCard';
import { shallow } from 'enzyme';

describe('<PropsCard>', () => {
    it('Loads props', () => {

        const ContextProvider = React.createContext({});

        const wrapper = shallow(
            <ContextProvider.Provider>
                <PropsCard />
            </ContextProvider.Provider>
        )

        expect(wrapper.find('pre').exists());
    })
})