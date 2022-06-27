import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.fecha.toLocaleString('es-ES', { month: 'long' })
    const day = props.fecha.toLocaleString('es-ES', { day: '2-digit' })
    const year = props.fecha.getFullYear()
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default ExpenseDate;