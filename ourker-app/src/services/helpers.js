export const getUserLogged = () => {
    let user = sessionStorage.getItem('user');
    if (!!!user) {
        return null;
    }
    return JSON.parse(sessionStorage.getItem('user'));
}