import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onNewExpenseSubmit(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const cancelFormHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={cancelFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}
export default NewExpense;