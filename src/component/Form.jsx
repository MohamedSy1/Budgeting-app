import React, {useState} from 'react'

const Form = ({onNewEntry}) => {

    const [formData, setFormData] = useState({ category: '', description: '', value: ''})

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {...formData, id: Date.now() }
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
        <form className="text-black" onSubmit={handleSubmit}>
            <label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {category.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </label>
            <label>
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required/>
            </label>
            <label>
                <input type="number" name="value" placeholder='Value' value={formData.value} onChange={handleChange} required/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;