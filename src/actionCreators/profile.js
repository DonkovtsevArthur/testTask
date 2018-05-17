import axios from "axios";


const onGetInfo = (city, languages, social) => ({
    type: "GET_USER_INFO",
    city,
    languages,
    social
});

const onGetInfoError = error => ({
    type: "GET_USER_INFO_ERROR",
    error
});


export const getUserInfo = id => dispatch => {

    const url = `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;
    axios.get(url)
        .then(res => {
            const { status, message } = res.data;
            if (status === "ok") {
                const { city, languages, social } = res.data.data;
                dispatch(onGetInfo(city, languages, social));
            } else {
                dispatch(onGetInfoError(message))
            }
        })
        .catch(e => dispatch(onGetInfoError('нет подключения к серверу')));
};