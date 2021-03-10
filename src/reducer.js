import { CREATE } from "./types"

export default function(state, action) {
    switch (action.type) {
        case CREATE:
            const { way, newData } = action.value;
            console.log(way);
            console.log(newData)
            return {
                ...state,
                newState: state.way = newData,
                //newState: state.dataContent[0].type = 'button',
            }

        default: return state
    }
}