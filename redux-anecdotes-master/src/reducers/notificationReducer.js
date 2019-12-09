
const notificationReducer = (state = null, action) => {
    switch (action.type){
        case "NOTIFICATION":
            return action.data.str
        case "EMPTY_NOTIFICATION":
            return ""
        default: return state
    }
}

export const setNotificationActionCreator = (str) => {
    return {
        type: "NOTIFICATION",
        data: { str }
    }
}

export const emptyNotificationActionCreator = () => {
    return {
        type: "EMPTY_NOTIFICATION"
    }
}

export default notificationReducer