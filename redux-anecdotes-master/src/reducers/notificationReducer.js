
const notificationReducer = (state = "wehere", action) => {
    switch (action.type){
        case "NOTIFICATION":
            return action.data.str
        default: return state
    }
}

const notificationActionCreator = (str) => {
    return {
        type: "NOTIFICATION",
        data: { str }
    }
}

export default notificationReducer