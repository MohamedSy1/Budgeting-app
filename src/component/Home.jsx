import React, { useState, useEffect } from 'react';
import Form from './Form';
import InflowOutflow from './inflowoutflow';

const InputBox = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem('entries') || '[]');
        setEntries(storedEntries);
    }, []);

    const handleNewEntry = (newEntry) => {
        setEntries([...entries, newEntry]);
    };

    return (
        <div className='border'>
            <div className='flex justify-between text-center p-4'>
                <span className='flex-1 font-extrabold'>Category</span>
                <span className='flex-1 font-extrabold'>Description</span>
                <span className='flex-1 font-extrabold'>Amount</span>
            </div>
            <ul>
                {entries.map(entry => (
                    <li key={entry.id} className='flex justify-between text-center p-2 border-t'>
                        <span className='flex-1'>{entry.category}</span>
                        <span className='flex-1'>{entry.description}</span>
                        <span className='flex-1'>{entry.value}</span>
                    </li>
                ))}
            </ul>
            <Form onNewEntry={handleNewEntry} />
            <InflowOutflow />
        </div>
    );
};

export default InputBox;