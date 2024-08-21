// app/error.tsx
'use client';

import { FC, useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <pre>{error.stack}</pre> {/* Display stack trace for debugging */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorComponent;
