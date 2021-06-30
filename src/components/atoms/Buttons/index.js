import React from 'react';

const Buttons = ({onClick, title, loading}) => {
    if(loading){
        return <button className="group relative w-full flex justify-center py-2 px-4 mt-5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Loading...</button>
    }
    return (
        <button className="group relative w-full flex justify-center py-2 px-4 mt-5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClick}>{title}</button>
    )
}

export default Buttons;