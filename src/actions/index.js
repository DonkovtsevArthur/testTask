import axios from "axios";

export const onGetLogin = (id) => ({
    type: "ADD_ISLOGIN",
    payload: id,
})

const onGetError = (error) => ({
    type: "ERR_IN_LOGIN",
    payload: error
})

export const onOut = () => ({
    type: "DEFAULT"
});



export const getUserLogin = (url, email, password) => dispatch => {
    dispatch({
        type: 'REQUEST'
    })
    axios.post(url, {
            email,
            password
        })
        .then(res => {
            const {
                data,
                status
            } = res.data;

            if (status === "ok") {
                dispatch(onGetLogin(data.id));

            } else {
                dispatch(onGetError("Имя пользователя или пароль введены не верно"));
            }
        })
        .catch(e => dispatch(onGetError("Нет подключения, попробуйте ещё")));
}
