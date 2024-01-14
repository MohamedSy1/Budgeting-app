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
            if (entrie.category === "Income") {
                sum += Number(entrie.value)
            }
        })
        return sum
    }

    const totalOutflow = () => {
        let sum = 0 
        entries.forEach((entrie) => {
            if (entrie.category !== "Income") {
                sum += Math.abs(Number(entrie.value))
            }
        })
        return sum
    }

    let total = totalInflow() - totalOutflow()

    return (
        <div>
            <span>{totalInflow()}</span>
            <span className="border pl-[1rem]">{totalOutflow()}</span>
            <span> = {totalInflow() - totalOutflow()}</span>
        </div>
    )

}

export default InflowOutflow;