import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [selectedYear, setYear] = useState("None");
    const filterUpdateHandler = (year) => {
        setYear(year);
    };

    const sortByDateAsc = (a, b) => {
        return (a.date > b.date) ? -1 : 1;
    };
    const getFilteredList = (expense) => {
        return (selectedYear !== "None") ? selectedYear === String(expense.date.getFullYear()) : true;
    };
    const filteredList = props.expenses.filter(getFilteredList).sort(sortByDateAsc);

    return(
        <Card className="expenses">
            <h1>Expense List</h1>
            <ExpenseFilter onFilterUpdate={filterUpdateHandler} />
            <ExpensesChart expenses={filteredList} />
            <ExpensesList items={filteredList}/>
        </Card>
    );
}

export default Expenses;