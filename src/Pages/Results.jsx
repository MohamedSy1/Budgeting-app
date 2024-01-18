import React, { useState, useEffect } from "react";
import Form from '../component/Form';


const balanceList = () =>{
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem('entries') || '[]');
        setEntries(storedEntries);
    }, []);

    const handleNewEntry = (newEntry) => {
        setEntries([...entries, newEntry]);
    };

    return (
        <div id="balance-list">
            <ul id='list'>
                {entries.map((entry) => {
                    <li>{entry.category}</li>
                })}
            </ul>
        </div>
    )
};