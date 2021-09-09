import UserCard from "./UserCard";

import styles from "./UserList.module.css";

const UserList = props => {
    return (
        <div className={styles['user-list']}>
            {props.users.map(user => {return <UserCard key={user.id} username={user.username} age={user.age} />})}
        </div>
    );
}

export default UserList;