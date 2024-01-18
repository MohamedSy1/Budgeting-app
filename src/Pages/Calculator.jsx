import React, { useState, useEffect } from 'react';
import Form from '../component/Form';

import NavBar from '../component/navbar';
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
        <div>
            <NavBar />
            <Form onNewEntry={handleNewEntry} />
            <div className='border'>
                <div className='flex flex-wrap overflow-y-auto h-[300px] p-4 border'> {/* Enable vertical scrolling and set a fixed height */}
                    <ul className='w-full'> {/* Full width for the ul element */}
                        {entries.map(entry => (
                            <li key={entry.id} className='bg-white shadow-md rounded-lg m-2 p-4'> {/* Full width cards */}
                                <span className='text-lg font-semibold'>{entry.category}</span>
                                <p className='text-gray-600'>{entry.description}</p>
                                <span className='mt-2 font-bold'>{entry.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InputBox;