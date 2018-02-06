export default store => next => action => {
    const {callAPI} = action
    if (!callAPI) return next(action)
    fetch(callAPI, {method: "POST"})
        .then(res => res.json())
        .then(response => next({...action, response}))
}