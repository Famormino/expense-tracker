import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {

    const expenseFormHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseForm={expenseFormHandler} />
        </div>
    )
}

export default NewExpense