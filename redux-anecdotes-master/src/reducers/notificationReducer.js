
const notificationReducer = (state = null, action) => {
    switch (action.type){
        case "NOTIFICATION":
            return action.data.str
        case "EMPTY_NOTIFICATION":
            return ""
        default: return state
    }
}

export const setNotificationActionCreator = (str, seconds) => {
    return async dispatch => {
        dispatch({
            type: "NOTIFICATION",
            data: { str }
        })
        setTimeout(() => {
            dispatch({
                type: "EMPTY_NOTIFICATION"
            })
        }, seconds *1000)
    }
}
    

export const emptyNotificationActionCreator = () => {
    return {
        type: "EMPTY_NOTIFICATION"
    }
}

export default notificationReducer