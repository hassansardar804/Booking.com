import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="text-center">
                <h1 className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                    404
                </h1>
                <p className="mb-8 text-3xl text-gray-700 animate-fade-in-up">
                    Oops! Page Not Found
                </p>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <a
                        href="/"
                        className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7"
                    >
                        <span className="flex items-center space-x-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="pr-6 text-gray-900">Go Back Home</span>
                        </span>
                        <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900">
                            Home &rarr;
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const keyframes = `
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes tilt {
    0%, 50%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(0.5deg);
    }
    75% {
      transform: rotate(-0.5deg);
    }
  }
`;

const NotFound = () => (
    <>
        <style>{keyframes}</style>
        <NotFoundPage />
    </>
);

export default NotFound;