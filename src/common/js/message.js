import { message } from 'antd';

export const msgSuccess = (msg, duration = 5) => {
    message.success(msg, duration)
}

export const msgError = (msg, duration = 5) => {
    message.error(msg, duration)
}