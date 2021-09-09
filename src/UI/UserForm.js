import {useState} from "react";

import styles from './UserForm.module.css';

const UserForm = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [usernameIsValid, setUsernameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const nameUpdateHandler = (event) => {
        if(event.target.value !== '') {
            setUsernameIsValid(true);
        } else {
            setUsernameIsValid(false)
        }
        setUsername(event.target.value);
    }
    const ageUpdateHandler = (event) => {
        if(event.target.value !== '') {
            setAgeIsValid(true);
        } else {
            setAgeIsValid(false);
        }
        setAge(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(ageIsValid && usernameIsValid && age.trim().length !== 0 && username.trim().length !== 0) {
            props.onFormSubmit({
                username: username,
                age: age,
                id: Math.random() * 100
            });
            setUsername('');
            setAge('');
        }
        if(age.trim().length === 0) {
            setAgeIsValid(false);
        }
        if(username.trim().length === 0) {
            setUsernameIsValid(false);
        }
    }

    return (
        <div>
            <form className={styles['user-form']} onSubmit={formSubmitHandler}>
                <input type="text" className={!usernameIsValid && styles['invalid']} onChange={nameUpdateHandler} value={username} placeholder="Username" />
                <input type="number" className={!ageIsValid && styles['invalid']} onChange={ageUpdateHandler} value={age} placeholder="Age" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default UserForm;