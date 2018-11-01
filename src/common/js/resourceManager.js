import resource_zh from '../../assets/ins/resource_zh.json'

const languages = {
    CN: 'CN',
    EN: 'EN'
}

const getString = (res) => {
    const language = window.navigator.language;
    if(language.includes(languages.CN)) {
        return resource_zh[res];
    }
}

export default {
    getString
}

