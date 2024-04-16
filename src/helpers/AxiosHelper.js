const AxiosConfig = (axios) => {
  let interceptor;

  const setInterceptors = (setErrorCode) => {
    interceptor = axios.interceptors.response.use(
      function (res) {
        setErrorCode(res.status);
        return res;
      },
      function (err) {
        if (!err.response || err.response.status >= 500) {
          setErrorCode(500);
        } else {
          return Promise.reject(err);
        }
      }
    );
  };
  const removeInterceptors = () => {
    axios.interceptors.request.eject(interceptor);
  };

  const errorCodeEquals = (err, statusCode) => {
    return (
      err &&
      err.response &&
      err.response.status &&
      err.response.status === statusCode
    );
  };

  const getStatusCode = (err) => {
    if (err && err.response && err.response.status) return err.response.status;
    return NaN;
  };

  return {
    setInterceptors,
    removeInterceptors,
    errorCodeEquals,
    getStatusCode,
  };
};

export default AxiosConfig;
