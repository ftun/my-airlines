import React from 'react';

const BasicView = ({ title, children }) => {

    return <div className='card'>
        <div className="divTable">
            <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="divTableRow">
                    {children}
                </div>
            </div>
        </div>
    </div>
};

export default BasicView;