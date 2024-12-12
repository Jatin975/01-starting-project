import React from 'react'

export default function Input({ id, labelText, inputType, value, handleChange, className = "", ...props }) {
    let baseClasses = 'rounded w-72 h-7 p-2';

    return (
        <div className="flex flex-col gap-1 mb-2">
            <label htmlFor={id} className="font-bold">{labelText}</label>
            <input id={id} className={`${baseClasses} ${className}`} type={inputType} value={value} onChange={(e) => handleChange(e.target.value)} {...props} />
        </div>
    )
}
