import React from 'react';

export function ButtonComponent({ label, color, onClick }) {
    const bgColor = color ? 'bg-green-500 hover:bg-green-600 focus:ring-green-300' : 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300';
    
    return (
        <button
            type="submit"
            className={`w-full text-white ${bgColor} focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4`}
            // onClick={onClick}
        >
            {label}
        </button>
    );
}
