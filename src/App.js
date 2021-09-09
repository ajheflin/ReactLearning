import React, {useState} from 'react';
import UserForm from "./UI/UserForm";
import UserList from "./UI/UserList";


function App() {
    const [users, setUsers] = useState([
        {
            username: "AJ",
            age: "20"
        },
        {
            username: "Rachel",
            age: "21"
        }
    ]);

    const formSubmitHandler = newUser => {
        setUsers(prevState => {
            return[
                ...prevState,
                newUser
            ];
        });
    }

    return (
        <div>
            <UserForm onFormSubmit={formSubmitHandler} />
            <UserList users={users} />
        </div>
    );
}

export default App;
