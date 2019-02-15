const initialState = {
    error: null,
    loading: false,
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Reset to initia state and turn on loading status
        case 'FETCH_TRADES': {
            return {
                ...state,
                [action.pair]: {
                    loading: true,
                },
            };
        }
        // Fetching was successfull, save assets
        case 'FETCH_TRADES_SUCCESS': {
            return {
                ...state,
                [action.pair]: {
                    loading: false,
                    data: action.data,
                },
            };
        }
        // Fetching has failed, save error
        case 'FETCH_TRADES_ERROR': {
            return {
                ...state,
                [action.pair]: {
                    loading: false,
                    error: action.error,
                },
            };
        }
        default: {
            return state;
        }
    }
};
