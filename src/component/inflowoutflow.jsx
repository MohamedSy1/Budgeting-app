import React, {useState, useEffect} from "react";

const InflowOutflow = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem('entries') || '[]');
        setEntries(storedEntries);
    }, []);

    const handleNewEntry = (newEntry) => {
        setEntries([...entries, newEntry]);
    };

    const totalInflow = () => {
        let sum = 0
        entries.forEach((entrie) => {
            if (entrie.income) {
                sum += Number(entrie.value)
            }
        })
        return sum
    }

    const totalOutflow = () => {
        let sum = 0 
        entries.forEach((entrie) => {
            if (!(entrie.income)) {
                sum += Number(entrie.value)
            }
        })
        return sum
    }

    return (
        <div>
            <span>{totalInflow()}</span>
            <span>{totalOutflow()}</span>
        </div>
    )

}

export default InflowOutflow;