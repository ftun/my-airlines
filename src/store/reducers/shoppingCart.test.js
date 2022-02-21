import shoppingCartReducer, {
    addShoppingCart,
    removeShoppingCart,
    removePayItems,
} from './shoppingCart';

describe('counter reducer', () => {
    const initialState = {
        data: [],
        status: '',
    };
    it('should handle initial state', () => {
        expect(shoppingCartReducer(undefined, { type: 'unknown' })).toEqual({
            data: [],
            status: '',
        });
    });

    it('should handle addShoppingCart', () => {
        const actual = shoppingCartReducer(initialState, addShoppingCart({
            horario: '09:15',
            aerolinea: 'Viva Aerobus',
            duracion: '5h 35m',
            tipo: '2 Escalas',
            imagen: 'https://www.edestinos.com.mx/_fe/img/al_logo_VB.png?s=180x64',
            precio: 500,
            id: '0-3-2022-02-24-Andorra-Angola',
            date: '2022-02-24',
            descriptionFrom: 'Andorra',
            descriptionTo: 'Angola',
            numberPerson: '3',
            precioPersona: 1500,
            iva: 240,
            precioFinal: 1740
        }));
        expect(actual.data).toEqual([{
            horario: '09:15',
            aerolinea: 'Viva Aerobus',
            duracion: '5h 35m',
            tipo: '2 Escalas',
            imagen: 'https://www.edestinos.com.mx/_fe/img/al_logo_VB.png?s=180x64',
            precio: 500,
            id: '0-3-2022-02-24-Andorra-Angola',
            date: '2022-02-24',
            descriptionFrom: 'Andorra',
            descriptionTo: 'Angola',
            numberPerson: '3',
            precioPersona: 1500,
            iva: 240,
            precioFinal: 1740
        }]);
    });

    it('should handle removeShoppingCart', () => {
        const actual = shoppingCartReducer(initialState, removeShoppingCart('1-3-2022-02-24-Andorra-Angola'));
        expect(actual.data).toEqual([]);
    });

    it('should handle removePayItems', () => {
        const actual = shoppingCartReducer(initialState, removePayItems([]));
        expect(actual.data).toEqual([]);
    });
});
