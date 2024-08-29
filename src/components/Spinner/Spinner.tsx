'use client';
import React from 'react';

export type SpinnerProps = {
  message?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ message = 'Cargando...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <div
          className="w-12 h-12 rounded-full absolute
                        border-4 border-solid border-gray-200"
        ></div>
        <div
          className="w-12 h-12 rounded-full animate-spin absolute
                        border-4 border-solid border-primary border-t-transparent shadow-md"
        ></div>
      </div>
      {message && (
        <p className="mt-4 text-center text-sm sm:text-base text-gray-600 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default Spinner;
