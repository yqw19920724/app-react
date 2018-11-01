import 'whatwg-fetch'

const apiName = {
    LOGIN: 'login',
    REGISTER: 'register',
    CREATEGOOD: 'createGood',
    UPLOADIMAGE: 'uploadImage'
}

const baseUrl = 'http://localhost:3000/';

const apiList = [
    { apiName: apiName.LOGIN, method: 'POST', url: 'users/login' },
    { apiName: apiName.REGISTER, method: 'POST', url: 'users/register' },
    { apiName: apiName.CREATEGOOD, method: 'POST', url: 'goods' },
    { apiName: apiName.UPLOADIMAGE, method: 'POST', url: 'upload/${id}' }
]

const setXML = (apiName, ...rest) => {
    let params = {}, restArr = [];
    const restLength = rest.length;
    if(restLength !== 0 && rest[restLength -1] instanceof Object ) {
        params = rest[restLength -1];
        restArr = rest.slice(0, restLength - 1);
    }else {
        restArr = rest;
    }
    const copyApiList = JSON.parse(JSON.stringify(apiList));
    const index = copyApiList.findIndex(api => {
        return api.apiName === apiName;
    })
    if(index === -1) {
        return [{err: '未找到相应接口！'}]
    }
    const api = copyApiList[index];
    api.url = `${baseUrl}${api.url}`;
    const regex = /\${[a-z]+}/g;
    const urlParams = api.url.match(regex);
    if(urlParams && urlParams.length !== restArr.length) {
        return [{err: '借口参数不正确！'}]
    }
    if(urlParams && urlParams.length !== 0) {
        urlParams.forEach((param, i) => {
            api.url = api.url.replace(param, restArr[i])
        });
    }
    switch (api.method) {
        case 'GET':
            api.url = `${api.url}?`;
            for (const key in params) {
                api.url = `${api.url}${key}=${params[key]}&`
            }
            api.url = api.url.substr(0, api.url.length -1);
            break;
            case 'POST':
            break;
        
        default:
            break;
    }
    const apiParams = {method: api.method};
    apiParams.body = formatBodyData(params);
    apiParams.headers = formatHeaders(params);
    return [null, {apiUrl: api.url,apiParams: apiParams}]
}

const formatBodyData = (params) => {
    return params instanceof FormData ? params : JSON.stringify(params);
}

const formatHeaders = (params) => {
    const headers = {};
    if(!(params instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    return headers;
}

const handler = (apiName, ...rest) => {
    return new Promise(function (resolve, reject) {
        const [err, apiData] = setXML(apiName, ...rest);
        if(err) {
            return reject(err)
        }
        fetch(apiData.apiUrl, apiData.apiParams)
        .then((response) => response.json())
        .then((responseData) => {
            console.log('res:',apiData.apiUrl, responseData);   //网络请求成功返回的数据
            if(responseData.err) {
                return reject(responseData);
            }
            resolve(responseData);
        })
        .catch(err => {
            console.log('err:',apiData.apiUrl, err);   //网络请求失败返回的数据  
            reject(err);
        });
    });
}

export default {
    apiName,
    handler
}