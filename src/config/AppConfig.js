const AppConfig = () => {
  const API_ORIGIN =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_URL_DEVELOPMENT //http://localhost:8000
      : process.env.REACT_APP_API_URL_PRODUCTION; //https://garegabot-ce14aee9f894.herokuapp.com

  return { API_ORIGIN };
};

export default AppConfig;
