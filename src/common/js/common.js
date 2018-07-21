import Cookies from 'react-cookies';

export const setCookie = (params, day) => {
    const date = new Date();
    const expires = new Date(date.setDate(date.getDate() + day));
    const key = Object.keys(params)[0];
    const value = Object.values(params)[0];
    Cookies.save(key, value, {expires: expires});
}

export const getCookie = key => {
    return  Cookies.load(key)
}