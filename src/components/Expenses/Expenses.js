import Card from "../UI/Card"
import ExpenseItems from "./ExpenseItems"
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItems nombre={props.expenses[0].nombre} costo={props.expenses[0].costo} fecha={props.expenses[0].date} />
            <ExpenseItems nombre={props.expenses[1].nombre} costo={props.expenses[1].costo} fecha={props.expenses[1].date} />
            <ExpenseItems nombre={props.expenses[2].nombre} costo={props.expenses[2].costo} fecha={props.expenses[2].date} />
        </Card>
    )
}

export default Expenses