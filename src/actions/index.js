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
        type: "LOADER",
        payload: true
    });
    return axios
        .post(url, {
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
                // this.setState({
                //     isLoader: false
                // });
            } else {
                dispatch(onGetError("Имя пользователя или пароль введены не верно"));
                // this.setState({
                //     isRedirect: false
                // });
                console.log( 'hwkk')
            }
        })
        .catch(e =>
            dispatch(notServer("Нет подключения, попробуйте заново"))
        );

}
