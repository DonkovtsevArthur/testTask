export function Ath(login, password) {
  const data = { login: "Admin", password: 12345 };
  window.localStorage.setItem("login", login);
  window.localStorage.setItem("password", password);

  return data.login === login && data.password == password ? true : false;
}
