// =================================================
import React from 'react';
// =================================================

// Component

function Body({ children, propsClass }) {
    return (
        <div className={propsClass}>
            <div className='wrapper'>
                <div className={`${propsClass}__body`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Body;