import styles from './UserCard.module.css'

const UserCard = props => {
    return (
        <div>
            <p className={styles['user-card']}>{props.username} ({props.age} {(props.age === '1') ? 'year' : 'years'} old)</p>
        </div>
    );
}

export default UserCard;