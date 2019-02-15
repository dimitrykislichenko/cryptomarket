import React from 'React';
import { compose, branch, renderComponent } from 'recompose';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { Spinner } from '../../common';
import ErrorMessage from '../../common/components/ErrorMessage';

interface TradesChartData {
    labels: [string];
    datasets: [any];
}

interface TradesChartProps {
    data: TradesChartData;
}

interface SpinnerProps {
    loading: boolean;
}

interface ErrorProps {
    error: string;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const CHART_CONFIG = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
};

const TradesChart = ({ data }: TradesChartProps) => (
    <LineChart data={data} width={SCREEN_WIDTH} height={220} chartConfig={CHART_CONFIG} bezier />
);

// Show spinner while loading chart data
const withSpinner = branch(({ loading }: SpinnerProps) => loading, renderComponent(Spinner));

// Show error if there is any
const withError = branch(
    ({ error }: ErrorProps) => error,
    renderComponent(({ error }: ErrorProps) => <ErrorMessage message={error} />),
);

export default compose(
    withSpinner,
    withError,
)(TradesChart);
