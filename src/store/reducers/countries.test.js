import countriesReducer, {
    selectItem,
} from './countries';

describe('counter reducer', () => {
    const initialState = {
        status: '',
        data: [],
    };
    it('should handle initial state', () => {
        expect(countriesReducer(undefined, { type: 'unknown' })).toEqual({
            status: '',
            data: [],
        });
    });

    it('should handle selectItem', () => {
        const actual = countriesReducer(initialState, selectItem(1));
        expect(actual.data).toEqual([]);
    });

});
