import React, {useState} from 'react'

// I have to add all the vlaue that are not outflow into the outflow object
// I Have to add all the values that are inflow into the inflow 
const Form = ({onNewEntry}) => {

    const [formData, setFormData] = useState({ category: '', description: '', value: ''})
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = formData.category !== 'Income' ? -Math.abs(Number(formData.value)) : Number(formData.value);
        const newEntry = {...formData, value, id: Date.now() }
        onNewEntry(newEntry)
        localStorage.setItem('entries', JSON.stringify([...JSON.parse(localStorage.getItem('entries') || '[]'), newEntry]))
        setFormData({ category: '', description: '', value: ''})
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }

    const categoryOption = []
    const category = ["Groceries", "School", "Entertainment", "Utensils", "Kids", "Travel", "Commute", "Insurance", "Clothing", "Car", "Taxes", "Health", "Home", "Beuty", "Income", "Misc", "Gifting"]
    for (let i = 0; i < category.length; i++) {
        categoryOption.push(<option key={Math.random() * 1000} value={category[i]}>{category[i]}</option>)
    }
    
    return (
        <form className="text-black mt-52" onSubmit={handleSubmit}>
            <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                <select name="category" value={formData.category} onChange={handleChange} required className='mr-[0.1rem] ml-[0.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value="">Select Category</option>
                    {category.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </label>
            <label className='mr-[0.1rem] mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </label>
            <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                <input type="number" name="value" placeholder='Value' value={formData.value} onChange={handleChange} required className=' w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            </label>
            <button type="submit" className='rounded-lg py-1 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 bg-white'>Submit</button>
        </form>
    )
}

export default Form;