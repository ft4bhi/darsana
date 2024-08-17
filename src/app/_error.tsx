import { NextPageContext } from 'next';
import React from 'react';

interface ErrorProps {
  statusCode: number;
}

const ErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>
        {statusCode
          ? `A server error occurred (status code: ${statusCode})`
          : 'An error occurred on the client side'}
      </p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
