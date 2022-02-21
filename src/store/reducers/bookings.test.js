import bookingReduces, {
    addBookings,
    removeBookings,
    setInitialBookings,
} from './bookings';

describe('booking reducer', () => {
    const initialState = {
        status: '',
        data: [],
        bookings: [],
        totalPay: 0,
    };
    it('should handle initial state', () => {
        expect(bookingReduces(undefined, { type: 'unknown' })).toEqual({
            status: '',
            data: [],
            bookings: [],
            totalPay: 0,
        });
    });

    it('should handle addBookings', () => {
        const actual = bookingReduces(initialState, addBookings({
            horario: '10:15',
            aerolinea: 'AirAsia',
            duracion: '5h 35m',
            tipo: 'Directo',
            imagen: 'https://www.edestinos.com.mx/_fe/img/al_logo_AK.png?s=180x64',
            precio: 500,
            id: '3-3-2022-02-24-Andorra-Angola',
            date: '2022-02-24',
            descriptionFrom: 'Andorra',
            descriptionTo: 'Angola',
            numberPerson: '3',
            precioPersona: 1500,
            iva: 240,
            precioFinal: 1740
        }));
        expect(actual.data).toEqual([
            {
                horario: '10:15',
                aerolinea: 'AirAsia',
                duracion: '5h 35m',
                tipo: 'Directo',
                imagen: 'https://www.edestinos.com.mx/_fe/img/al_logo_AK.png?s=180x64',
                precio: 500,
                id: '3-3-2022-02-24-Andorra-Angola',
                date: '2022-02-24',
                descriptionFrom: 'Andorra',
                descriptionTo: 'Angola',
                numberPerson: '3',
                precioPersona: 1500,
                iva: 240,
                precioFinal: 1740
            }
        ]);
    });

    it('should handle removeBookings', () => {
        const actual = bookingReduces(initialState, removeBookings('0-3-2022-02-24-Andorra-Angola'));
        expect(actual.data).toEqual([]);
    });

    it('should handle setInitialBookings', () => {
        const actual = bookingReduces(initialState, setInitialBookings([{}]));
        expect(actual.data).toEqual([{}]);
    });
});
