import React from 'react';
import Pay from './pay';
import { render } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";
import { Provider } from "react-redux";
// import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const data = {
    bookings: {
        status: '',
        data: [
            {
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
            },
            {
                horario: '09:30',
                aerolinea: 'Volaris',
                duracion: '3h 45m',
                tipo: '1 Escala',
                imagen: 'https://www.edestinos.com.mx/_fe/img/al_logo_Y4.png?s=180x64',
                precio: 650,
                id: '1-3-2022-02-24-Andorra-Angola',
                date: '2022-02-24',
                descriptionFrom: 'Andorra',
                descriptionTo: 'Angola',
                numberPerson: '3',
                precioPersona: 1950,
                iva: 312,
                precioFinal: 2262
            },
            {
                horario: '09:45',
                aerolinea: 'United Airlines',
                duracion: '2h 50m',
                tipo: 'Directo',
                imagen: 'https://www.edestinos.com.mx/_fe/img/al_logo_AA.png?s=180x64',
                precio: 850,
                id: '2-3-2022-02-24-Andorra-Angola',
                date: '2022-02-24',
                descriptionFrom: 'Andorra',
                descriptionTo: 'Angola',
                numberPerson: '3',
                precioPersona: 2550,
                iva: 408,
                precioFinal: 2958
            },
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
        ],
        bookings: [],
        totalPay: 8700
    }
};

describe('render', () => {
    it('renders without crashing', async () => {
        const store = mockStore(data);
        const { container } = render(
            <Provider store={store}>
                <Pay />
            </Provider>
        );

        // const nombres = container.querySelector('input[name="nombres"]');
        // const apellidos = container.querySelector('input[name="apellidos"]');
        // const direccion = container.querySelector('input[name="direccion"]');
        // const correo = container.querySelector('input[name="correo"]');
        // const submitButton = container.querySelector('button[type="submit"]');

        // fireEvent.change(nombres, { target: { value: 'Felipe de Jesus' } });
        // fireEvent.blur(nombres);
        // fireEvent.change(apellidos, { target: { value: 'Tun Cauich' } });
        // fireEvent.blur(apellidos);
        // fireEvent.change(direccion, { target: { value: 'Calle 15 S/N' } });
        // fireEvent.blur(direccion);
        // fireEvent.change(correo, { target: { value: 'felipe.tun.cauich@gmail.com' } });
        // fireEvent.blur(correo);

        // fireEvent.click(submitButton);

        // await (() => {
        //     expect(nombres.tagName).toBe('INPUT');
        //     expect(apellidos.tagName).toBe('INPUT');
        //     expect(direccion.tagName).toBe('INPUT');
        //     expect(correo.tagName).toBe('INPUT');
        //     expect(submitButton.tagName).toBe('BUTTON');
        // });
    });
});