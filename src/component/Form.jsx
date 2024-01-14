import React from 'react'


const Form = () => {
    const category = ["Groceries", "School", "Entertainment", "Utensils", "Kids", "Travel", "Commute",
                     "Insurance", "Clothing", "Car", "Taxes", "Health", "Home", "Beuty", "Income", "Misc", "Gifting"]
    return (
        <div>
            <select key={Math.random() * 1000}>
                {category}
            </select>
        </div>
    )
}

export default Form;