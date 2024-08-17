'use client'
import { useRouter } from 'next/router';
import React from 'react';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  const router = useRouter();

  const handleReset = () => {
    reset();
    router.push('/'); // Redirect to home or another page
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={handleReset}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;