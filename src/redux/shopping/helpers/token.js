
const saveTokenLocalStorage = (token) => {
    if(token !== null && token !== undefined && token !== ''){
        window.localStorage.setItem('token_login_shopping', token);
    }
}


export const token = {
    saveTokenLocalStorage
}