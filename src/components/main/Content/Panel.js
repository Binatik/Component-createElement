// =================================================
import React from 'react';
// =================================================

// Component

function Panel({ props, dataCh}) {

    const { width, height, visible } = props;
    const { content, checkContent } = dataCh;

    return (
            visible ?
            <div
                className='content__panel'
                style={
                    {
                        maxWidth: width,
                        minHeight: height,
                    }
                }>
                {
                    Array.isArray(content) ? content.map((ch) => {
                        return checkContent(ch);
                    }) : null
                }
            </div>
            : null
    );
}

export default Panel;