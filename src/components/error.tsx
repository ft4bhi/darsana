'use client';

import React from 'react';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  
  const handleReset = () => {
    reset();
    // Redirect to home or another page using window.location
    window.location.href = '/'; // Change this to your desired redirect path
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-xl text-gray-700 mt-2">Something went wrong.</p>
        <p className="text-md text-gray-500 mt-1">{error.message}</p>
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
      <div className="mt-8 p-4 border-t border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Report this issue</h2>
        <p className="text-sm text-gray-600">If you continue to see this error, please contact us.</p>
        <form
          action="/report-issue"
          method="POST"
          className="mt-2 flex flex-col space-y-2"
        >
          <textarea
            name="issue"
            rows={4}
            placeholder="Describe the issue..."
            className="p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ErrorPage;
