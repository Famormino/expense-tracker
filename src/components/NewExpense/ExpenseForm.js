import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangehandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangehandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangehandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        console.log(event)
        event.preventDefault()
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        console.log(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangehandler} value={title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangehandler} value={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2022-12-01" onChange={dateChangehandler} value={date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm