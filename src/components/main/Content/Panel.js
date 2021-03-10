// =================================================
import React from 'react';
// =================================================

// Component

function Panel({ props, children}) {
    const { width, height, visible } = props;
    const { el, checkContent } = children;

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
                    Array.isArray(el.content) ? el.content.map((ch) => {
                        return checkContent(ch);
                    }) : null
                }
            </div>
            : null
    );
}

export default Panel;