import axios from "axios";

const onGetLogin = (id) => ({
    type: "ADD_ISLOGIN",
    payload: id
})

const onGetError = (error) => ({
    type: "ERR_IN_LOGIN",
    payload: error
})
const notServer = (text) => ({
    type: "NOT_SERVER",
    payload: text
})

export const getUserLogin = (url, email, password) => dispatch => {
    dispatch({
        type: 'REQUEST'       
    })
    try {
        axios.post(url, { email, password })
            .then(res => {
                const { data, status } = res.data;
            
                if (status === "ok") {
                    dispatch(onGetLogin(data.id));
 
                } else {
                    dispatch(onGetError("Имя пользователя или пароль введены не верно"));
                }
            })
            .catch(e => dispatch(onGetError("Имя пользователя или пароль введены не верно"))
            );
    } catch (error) {
        dispatch(notServer("Нет подключения, попробуйте заново"))
    }

}
