import { useState } from "react"
import Card from "../UI/Card"
import ExpenseItems from "./ExpenseItems"
import ExpensesFilter from "./ExpensesFilter"
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItems nombre={props.expenses[0].nombre} costo={props.expenses[0].costo} fecha={props.expenses[0].date} />
            <ExpenseItems nombre={props.expenses[1].nombre} costo={props.expenses[1].costo} fecha={props.expenses[1].date} />
            <ExpenseItems nombre={props.expenses[2].nombre} costo={props.expenses[2].costo} fecha={props.expenses[2].date} />
        </Card>
    )
}

export default Expenses