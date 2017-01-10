module.exports = {
  loggedIn() {
    return !!localStorage.mexEngToken;
  },

  getToken() {
    return localStorage.mexEngToken;
  },

  logout() {
    delete localStorage.mexEngToken;
  }
}
