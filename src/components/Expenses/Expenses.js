import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import {useState} from "react";

function Expenses(props) {
    const [selectedYear, setYear] = useState('');
    const filterUpdateHandler = (year) => {
        setYear(year);
    };

    const sortByDateAsc = (a, b) => {
        return (a.date > b.date) ? -1 : 1;
    };

    return(
        <Card className="expenses">
            <h1>Expense List</h1>
            <ExpenseFilter onFilterUpdate={filterUpdateHandler} />
            {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
            {/*<ExpenseItem*/}
            {/*    title={props.expenses[0].title}*/}
            {/*    amount={props.expenses[0].amount}*/}
            {/*    date={props.expenses[0].date}/>*/}
            {/*<ExpenseItem*/}
            {/*    title={props.expenses[1].title}*/}
            {/*    amount={props.expenses[1].amount}*/}
            {/*    date={props.expenses[1].date}/>*/}
            {/*<ExpenseItem*/}
            {/*    title={props.expenses[2].title}*/}
            {/*    amount={props.expenses[2].amount}*/}
            {/*    date={props.expenses[2].date}/>*/}
            {/*<ExpenseItem*/}
            {/*    title={props.expenses[3].title}*/}
            {/*    amount={props.expenses[3].amount}*/}
            {/*    date={props.expenses[3].date}/>*/}
        </Card>
    );
}

export default Expenses;