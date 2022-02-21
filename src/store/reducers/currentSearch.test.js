import currentSearchReducer, {
    setCurrentSearch
} from './currentSearch';

describe('counter reducer', () => {
    const initialState = {
        status: '',
        data: {},
    };
    it('should handle initial state', () => {
        expect(currentSearchReducer(undefined, { type: 'unknown' })).toEqual({
            status: '',
            data: {},
        });
    });

    it('should handle setCurrentSearch', () => {
        const actual = currentSearchReducer(initialState, setCurrentSearch({
            from: '145',
            to: '119',
            date: '2022-02-24',
            number: '3',
            descriptionFrom: 'Andorra',
            descriptionTo: 'Angola'
        }));
        expect(actual.data).toEqual({
            from: '145',
            to: '119',
            date: '2022-02-24',
            number: '3',
            descriptionFrom: 'Andorra',
            descriptionTo: 'Angola'
        });
    });
});
