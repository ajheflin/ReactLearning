import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import {counterActions} from "../store/counter-slice";

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const visible = useSelector(state => state.counter.visible);

    const dispatch = useDispatch();

    const dispatchIncrement = (event) => {
        dispatch(counterActions.increment());
    }
    const dispatchIncrementOfFive = (event) => {
        dispatch(counterActions.increase(10));
    }
    const dispatchDecrement = (event) => {
        dispatch(counterActions.decrement());
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {visible && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={dispatchIncrement}>Increment</button>
                <button onClick={dispatchIncrementOfFive}>Increase by 10</button>
                <button onClick={dispatchDecrement}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// class Counter extends Component {
//
//     dispatchIncrement = (event) => {
//         this.props.increment();
//     }
//     dispatchDecrement = (event) => {
//         this.props.decrement();
//     }
//     toggleCounterHandler = (event) => {
//
//     }
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.dispatchIncrement}>Increment</button>
//                     <button onClick={this.dispatchDecrement}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'})
//     };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;