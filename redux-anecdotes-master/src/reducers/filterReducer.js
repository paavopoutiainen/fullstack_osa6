const filterReducer = (state = "", action) => {
    console.log(action)
    switch (action.type) {
        case "SET_FILTER":
            return action.data.filter
        default: return state    
    }
}

export const setFilterActionCreator = (filter) => {
    return {
        type: "SET_FILTER",
        data: { filter }
    }
}

export default filterReducer