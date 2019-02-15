import { takeLatest, put, call } from 'redux-saga/effects';
import { merge, isEmpty } from 'lodash';

import { fetchAssetsSuccess, fetchAssetsError } from '../actions/assets';
import { API_URL } from '../const';

/**
 * Get tradable asset pairs
 */
function* fetchAssetPairs() {
    // Get all available pairs
    const response = yield call(fetch, `${API_URL}/AssetPairs`);
    const json = yield call([response, 'json']);

    if (!isEmpty(json.error)) {
        throw new Error(json.error.join(';'));
    }

    return json;
}

/**
 * Get ticker information
 *
 * @param pairs Array - Comma delimited list of asset pairs to get info on
 */
function* fetchTicker(pairs) {
    const response = yield call(fetch, `${API_URL}/Ticker?pair=${pairs.join(',')}`);
    const json = yield call([response, 'json']);

    if (!isEmpty(json.error)) {
        throw new Error(json.error.join(';'));
    }

    return json;
}

/**
 * Fetch exchange asset pairs and place them in redux.
 */
export function* fetchAssetsAsync() {
    try {
        // Get all available pairs
        const assets = yield call(fetchAssetPairs);

        // Extract pairs and fetch information for each of them
        const pairs = Object.keys(assets.result);
        const tickers = yield call(fetchTicker, pairs);

        // Merge data from both fetched results
        const result = Object.values(merge(assets.result, tickers.result));

        yield put(fetchAssetsSuccess(result));
    } catch (error) {
        yield put(fetchAssetsError(error.message));
    }
}

export function* watchFetchAssetsAsync() {
    yield takeLatest('FETCH_ASSETS', fetchAssetsAsync);
}
