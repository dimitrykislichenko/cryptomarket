import { takeLatest, take, put, call } from 'redux-saga/effects';
import { isEmpty } from 'lodash';

import { fetchTradeSuccess, fetchTradesError } from '../actions/trades';
import { API_URL } from '../const';

/**
 * Fetch exchange asset pairs and place them in redux.
 */
export function* fetchTradesAsync({ pair }) {
    try {
        // Get all available pairs
        const response = yield call(fetch, `${API_URL}/Trades?pair=${pair}`);
        const json = yield call([response, 'json']);

        if (!isEmpty(json.error)) {
            throw new Error(json.error.join(';'));
        }

        yield put(fetchTradeSuccess(pair, json.result[pair]));
    } catch (error) {
        yield put(fetchTradesError(pair, error.message));
    }
}

export function* watchFetchTradesAsync() {
    yield takeLatest('FETCH_TRADES', fetchTradesAsync);
}
