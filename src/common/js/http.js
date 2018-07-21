import 'whatwg-fetch'

const baseUrl = 'http://localhost:3000/';

const apiList = [
    {
        apiName: 'login',
        method: 'POST',
        url: 'users/login'
    },
    {
        apiName: 'register',
        method: 'POST',
        url: 'users/register'
    }
]

const setXML = (apiName, id, params) => {
    const copyApiList = JSON.parse(JSON.stringify(apiList));
    const index = copyApiList.findIndex(api => {
        return api.apiName === apiName;
    })
    if(index === -1) {
        return [{err: '未找到相应接口！'}]
    }
    const api = copyApiList[index];
    api.url = `${baseUrl}${api.url}`
    if(Object.keys(params).length === 0) {
        params = id;
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
    const apiParams = {method: api.method, headers: {'Content-Type': 'application/json'}};
    if(Object.keys(params).length !== 0) {
        apiParams.body = JSON.stringify(params);
    }
    return [null, {apiUrl: api.url,apiParams: apiParams}]
}

export default (apiName, id = '',params = {}) => {
    return new Promise(function (resolve, reject) {
        const [err, apiData] = setXML(apiName, id, params);
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