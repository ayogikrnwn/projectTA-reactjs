import React from 'react';

const Buttons = ({onClick, title, loading}) => {
    if(loading){
        return <button className="w-full inline-flex justify-end rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-800 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Loading...</button>
    }
    return (
        <button className="w-full inline-flex justify-end rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-800 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClick}>{title}</button>
    )
}

export default Buttons;