//response.js

export const response = ({isSucess, code, message}, result) => {
    return {
        isSucess : isSucess,
        code: code,
        message : message,
        result : result
    }
};