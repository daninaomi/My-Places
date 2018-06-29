
export const logaUser = () => {
    return dispatch => {
        dispatch({ 
            type: 'LOGA_USER',
            // user: response.data.usuario
        })
    }
}

export const deslogaUser = () => {
    return {
        type: 'DESLOGA_USER'
    }
}