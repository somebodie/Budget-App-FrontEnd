function AuthInterceptor(AuthTokenFactory) {
  return {
    request: addToken
  }

  function addToken(config) {
    var token = AuthTokenFactory.getToken()
    console.log(token);

    // && config.url !== 'https://polar-retreat-61013.herokuapp.com'
    //
    // if (token) {
    //   config.headers = config.headers || {}
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
    console.log(config);

    return config
  }
}
