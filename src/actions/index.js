import axios from "axios";


export function Ath(login, password) {
  window.localStorage.setItem("login", login);
  window.localStorage.setItem("password", password);
  const url = "https://mysterious-reef-29460.herokuapp.com/api/v1/validate";
  axios
    .post(url, { email: login, password: password }
  )
    .then(res => console.log(res));
  

  // return data.login === login && data.password == password ? true : false;
}
