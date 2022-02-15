import React from 'react';

const Index = props => {

    return <div className='card'>
        <form>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow"><h3>Reservar vuelos</h3></div>
                    <div className="divTableRow">
                        <div className="divTableCell">Origen</div>
                        <div className="divTableCell">Destino</div>
                        <div className="divTableCell">Fecha</div>
                        <div className="divTableCell">N° Personas</div>
                        <div className="divTableCell"></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><input type="text"/></div>
                        <div className="divTableCell"><input type="text"/></div>
                        <div className="divTableCell"><input type="text"/></div>
                        <div className="divTableCell"><input type="text"/></div>
                        <div className="divTableCell"><input type="submit"/></div>
                    </div>
                </div>
            </div>
        </form>
    </div>
};

export default Index;