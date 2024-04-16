import { useState } from 'react';
import Context from './ErrorHandlerContext';
import Page500 from './pages/Page500/Page500';

function ErrorHandlerWrapper({ children }) {
  const [errorCode, setErrorCode] = useState(200);

  return (
    <Context.Provider value={{ errorCode, setErrorCode }}>
      {errorCode >= 500 ? <Page500 /> : children}
    </Context.Provider>
  );
}

export default ErrorHandlerWrapper;
