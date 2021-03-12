const dataContents = [
    {
        id: 1,
        type: 'panel',
        props: {
            width: 500,
            height: 200,
            visible: true

        },
        content: [{
            id: 1,
            type: 'panel',
            props: {
                caption: 'test',
                visible: false
            }
        }]
    },

    {
        id: 2,
        type: 'label',
        props: {
            caption: 'test',
            visible: false

        },
    },

    {
        id: 3,
        type: 'button',
        props: {
            width: 150,
            height: 100,
            visible: true
        },
    }
]

export default dataContents;