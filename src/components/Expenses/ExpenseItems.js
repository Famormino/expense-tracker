import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItems.css'

function ExpenseItems(props) {
 
    return (
        <Card className='expense-item'>
            <ExpenseDate fecha={props.fecha}/>
            <div className='expense-item__description'>
                <h2>{props.nombre}</h2>
                <div className='expense-item__price'>${props.costo} </div>
            </div>
        </Card>
    )
}

export default ExpenseItems