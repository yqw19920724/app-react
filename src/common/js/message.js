import { message } from 'antd';

export const msgSuccess = (message, duration = 5) => {
    message.success(message, duration)
}

export const msgError = (message, duration = 5) => {
    message.error(message, duration)
}