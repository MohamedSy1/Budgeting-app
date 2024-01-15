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

    return (
        <div>
            <div className='flex text-center pt-4'>
                <span className='flex-1 mr-[0.1rem] ml-[0.5rem] bg-gray-50 border border-gray-300 text-[green] font-extrabold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>{totalInflow()}</span>
                <span>-</span>
                <span className="border pl-[1rem] flex-1 mr-[0.1rem] ml-[0.5rem] bg-gray-50 border border-gray-300 text-[red] font-extrabold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{totalOutflow()}</span>
                <span>=</span>
                <span className='flex-1 flex-1 mr-[0.1rem] ml-[0.5rem] bg-gray-50 border border-gray-300 text-[green] font-extrabold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>{Number(totalInflow()) - Number(totalOutflow())}</span>
            </div>
            <div className='flex text-center pt-4 '>
                <span className='flex-1 '>Total Inflow</span>
                <span className='flex-1 '>Total Outflow</span>
                <span className='flex-1'>Working Balance</span>
            </div>
        </div>
    )

}

export default InflowOutflow;