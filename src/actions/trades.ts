import { Asset } from '../types/Asset';

/**
 * Get recent trades of specified asset pair
 *
 * @param pair - Asset pair
 */
export const fetchTrades = (pair: string) => ({
    type: 'FETCH_TRADES',
    pair,
});

/**
 * Trading data was successfully fetched
 *
 * @param pair - Asset pair
 * @param data - Trading data for specified pair
 */
export const fetchTradeSuccess = (pair: string, data: [Asset]) => ({
    type: 'FETCH_TRADES_SUCCESS',
    pair,
    data,
});

/**
 * Failed to fetch trading data for specified pair
 *
 * @param pair - Asset pair
 * @param error - Error explanation
 */
export const fetchTradesError = (pair: string, error: string) => ({
    type: 'FETCH_TRADES_ERROR',
    pair,
    error,
});
