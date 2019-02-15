import React from 'react';
import { render, shallow } from 'enzyme';

import TradesChart from '../TradesChart';
import { Trades } from '../__stories__/fixtures.ts';

// Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('TradesChart', () => {
    it('should render without crashing', () => {
        shallow(<TradesChart />);
    });

    it('should show spinner while loading data', () => {
        const component = render(<TradesChart loading />);
        expect(component).toMatchSnapshot();
    });

    it('should show error if was unable to fetch trades', () => {
        const component = render(<TradesChart error="Some error" />);
        expect(component).toMatchSnapshot();
    });

    it('should show chart if data was successfully loaded', () => {
        const component = render(<TradesChart data={Trades} />);
        expect(component).toMatchSnapshot();
    });
});
