import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItems.css'

const ExpenseItems = (props) => {
    const [nombre, setNombre] = useState(props.nombre)

    const handleChange = () => {
        setNombre('Updated')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate fecha={props.fecha} />
            <div className='expense-item__description'>
                <h2>{nombre}</h2>
                <button onClick={handleChange}>Click me!</button>
                <div className='expense-item__price'>${props.costo}</div>
            </div>
        </Card>
    )
}

export default ExpenseItems