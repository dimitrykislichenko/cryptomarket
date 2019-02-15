import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { format as formatDate } from 'date-fns';
import { isEmpty, map, mean, get } from 'lodash';

import { fetchTrades } from '../../actions/trades';
import TradesChart from '../components/TradesChart';

/**
 * Make an API call to fetch latest trades
 */
const withFetchDataRequest = lifecycle({
    componentDidMount: function() {
        this.props.fetchTrades(this.props.pair);
    },
});

const normalizeData = withProps(({ loading, data }: { loading: boolean; data: [[string]] }) => {
    if (loading || isEmpty(data)) {
        return { data: { labels: [], datasets: [{ data: [] }] } };
    }

    // Take average trading price grouped by day
    const _buffer = {};
    data.forEach((item: [string]) => {
        const label = formatDate(new Date(item[2] * 1000), 'DD');

        if (!_buffer[label]) _buffer[label] = [];
        _buffer[label].push(parseFloat(item[0]));
    });

    // Prepare data structure required by chart component
    const result = {
        data: {
            labels: Object.keys(_buffer),
            datasets: [
                {
                    data: map(Object.values(_buffer), data => mean(data)),
                },
            ],
        },
    };

    return result;
});

export default compose(
    connect(
        ({ trades }, { pair }) => get(trades, pair, {}),
        { fetchTrades },
    ),
    withFetchDataRequest,
    normalizeData,
)(TradesChart);
